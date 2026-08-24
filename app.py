import os
import json

from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
from werkzeug.utils import secure_filename

from services.ai import generate_text, analyze_file
from services.documents import extract_text
from services.complaints import get_portal, validate_category
from services.schemes import search_schemes, get_scheme, recommend_schemes
from services.security import limiter, clean_text


load_dotenv()

app = Flask(__name__)

app.config["MAX_CONTENT_LENGTH"] = 10 * 1024 * 1024

limiter.init_app(app)


# =========================================================
# HOME
# =========================================================

@app.get("/")
def index():
    return render_template("index.html")


# =========================================================
# SCHEME LIBRARY
# =========================================================

@app.get("/api/schemes")
def schemes():

    q = request.args.get("q", "").strip()
    category = request.args.get("category", "All").strip()

    results = search_schemes(q, category)

    return jsonify(results)


@app.get("/api/schemes/<scheme_id>")
def scheme(scheme_id):

    item = get_scheme(scheme_id)

    if not item:
        return jsonify({
            "error": "Scheme not found"
        }), 404

    return jsonify(item)


# =========================================================
# TRANSLATE TEXT
# =========================================================

@app.post("/api/ai/translate")
@limiter.limit("20 per minute")
def translate():

    data = request.get_json(silent=True) or {}

    text = clean_text(
        data.get("text", ""),
        10000
    )

    target = clean_text(
        data.get("target", "English"),
        50
    )

    if not text:
        return jsonify({
            "error": "Text is required."
        }), 400

    prompt = f"""
You are a careful translator for an Indian public-service website.

Translate the following text into {target}.

Rules:
- Preserve names exactly.
- Preserve scheme names exactly.
- Preserve numbers.
- Preserve dates.
- Preserve URLs.
- Preserve addresses where possible.
- Do not add new information.
- Return only the translation.

TEXT:

{text}
"""

    result, error = generate_text(prompt)

    if error:
        return jsonify({
            "error": error
        }), 502

    return jsonify({
        "result": result
    })


# =========================================================
# FAQ AI
# =========================================================

@app.post("/api/ai/faq")
@limiter.limit("20 per minute")
def faq():

    data = request.get_json(silent=True) or {}

    question = clean_text(
        data.get("question", ""),
        3000
    )

    language = clean_text(
        data.get("language", "English"),
        30
    )

    state = clean_text(
        data.get("state", ""),
        100
    )

    if not question:
        return jsonify({
            "error": "Question is required."
        }), 400

    prompt = f"""
You are AI Govt Assistant for India.

Answer the citizen's question clearly and simply in {language}.

Rules:

- Use simple language.
- Do not invent government schemes.
- Do not invent fees.
- Do not invent deadlines.
- Do not invent phone numbers.
- Do not invent URLs.
- Do not guarantee eligibility.
- If information depends on the user's state, clearly mention that.
- Prefer official government portals.
- If you are uncertain, clearly say that verification is needed.

Return the answer using these headings in {language}:

Answer
What you may need
Official source / verification

Question:

{question}

State provided by user:

{state}
"""

    result, error = generate_text(prompt)

    if error:
        return jsonify({
            "error": error
        }), 502

    return jsonify({
        "result": result
    })


# =========================================================
# DOCUMENT AI
# =========================================================

@app.post("/api/ai/summarize")
@limiter.limit("10 per minute")
def summarize():

    if "file" not in request.files:
        return jsonify({
            "error": "Upload a PDF, DOCX, TXT or image."
        }), 400

    f = request.files["file"]

    if not f.filename:
        return jsonify({
            "error": "No file selected."
        }), 400

    name = secure_filename(f.filename)

    ext = os.path.splitext(name)[1].lower()

    allowed = {
        ".pdf",
        ".docx",
        ".txt",
        ".png",
        ".jpg",
        ".jpeg",
        ".webp"
    }

    if ext not in allowed:
        return jsonify({
            "error": "Unsupported file type."
        }), 400

    data = f.read()

    if not data:
        return jsonify({
            "error": "Empty file."
        }), 400

    language = clean_text(
        request.form.get("language", "English"),
        50
    )

    # IMAGE DOCUMENT
    if ext in {
        ".png",
        ".jpg",
        ".jpeg",
        ".webp"
    }:

        result, error = analyze_file(
            data,
            f.mimetype,
            language
        )

    # PDF / DOCX / TXT
    else:

        text, error = extract_text(
            data,
            ext
        )

        if error:
            return jsonify({
                "error": error
            }), 400

        if not text.strip():
            return jsonify({
                "error":
                "No readable text found. Scanned PDFs may need OCR."
            }), 400

        prompt = f"""
You are an AI document assistant for Indian citizens.

Explain the following document in simple {language}.

IMPORTANT:

- Do not invent missing information.
- Do not change numbers.
- Do not change dates.
- Clearly mention when something is not available in the document.
- Keep government scheme names and official names unchanged.

Use these headings in {language}:

Document type
Key information
Important dates
Requirements / documents
What this means in simple words
Warnings or actions

DOCUMENT:

{text[:50000]}
"""

        result, error = generate_text(prompt)

    if error:
        return jsonify({
            "error": error
        }), 502

    return jsonify({
        "result": result
    })


# =========================================================
# TRANSLATE SCHEME RESULTS
# =========================================================

def translate_scheme_results(matches, language):

    # English does not need translation
    if language == "English":
        return matches

    if not matches:
        return matches

    translated_matches = []

    for scheme in matches:

        category = scheme.get("category", "")
        summary = scheme.get("summary", "")
        match_reason = scheme.get("match_reason", "")

        prompt = f"""
You are translating information for an Indian government assistance website.

Translate the following information into {language}.

IMPORTANT RULES:

1. Do NOT translate the scheme name.
2. Do NOT change the official URL.
3. Do NOT invent eligibility information.
4. Keep the meaning exactly the same.
5. Return ONLY valid JSON.
6. No markdown.
7. No ```json.

Return exactly in this format:

{{
    "category": "translated category",
    "summary": "translated summary",
    "match_reason": "translated match reason"
}}

Information:

Category:
{category}

Summary:
{summary}

Match Reason:
{match_reason}
"""

        result, error = generate_text(prompt)

        # If AI translation fails,
        # return original English scheme
        if error:
            translated_matches.append(scheme)
            continue

        try:

            cleaned = (
                result
                .replace("```json", "")
                .replace("```", "")
                .strip()
            )

            translated_data = json.loads(cleaned)

            new_scheme = scheme.copy()

            new_scheme["category"] = translated_data.get(
                "category",
                category
            )

            new_scheme["summary"] = translated_data.get(
                "summary",
                summary
            )

            new_scheme["match_reason"] = translated_data.get(
                "match_reason",
                match_reason
            )

            translated_matches.append(new_scheme)

        except Exception:

            translated_matches.append(scheme)

    return translated_matches


# =========================================================
# SCHEME AGENT
# =========================================================

@app.post("/api/scheme-agent")
@limiter.limit("20 per minute")
def scheme_agent():

    data = request.get_json(silent=True) or {}

    name = clean_text(
        data.get("name", ""),
        150
    )

    age = clean_text(
        str(data.get("age", "")),
        3
    )

    income = clean_text(
        data.get("income", "unknown"),
        20
    )

    state = clean_text(
        data.get("state", ""),
        100
    )

    occupation = clean_text(
        data.get(
            "occupation",
            "General citizen"
        ),
        80
    )

    need = clean_text(
        data.get(
            "need",
            "Other"
        ),
        80
    )

    language = clean_text(
        data.get(
            "language",
            "English"
        ),
        30
    )

    try:

        age_num = int(age)

    except:

        return jsonify({
            "error":
            "Please enter a valid age."
        }), 400

    if age_num < 0 or age_num > 120:

        return jsonify({
            "error":
            "Please enter a valid age."
        }), 400


    # =====================================================
    # FIND SCHEMES
    # =====================================================

    matches = recommend_schemes(
        age_num,
        income,
        state,
        occupation,
        need
    )


    # =====================================================
    # TRANSLATE RESULTS
    # =====================================================

    matches = translate_scheme_results(
        matches,
        language
    )


    # =====================================================
    # DISCLAIMER
    # =====================================================

    disclaimer = """
These are potential matches based on the information you provided.
They are not a final eligibility decision.
Please verify the current eligibility rules, documents,
dates and conditions from the official government source.
"""

    if language != "English":

        prompt = f"""
Translate the following disclaimer into simple {language}.

Return only the translation.

{disclaimer}
"""

        translated, error = generate_text(prompt)

        if not error:
            disclaimer = translated


    return jsonify({

        "schemes": matches,

        "disclaimer": disclaimer

    })


# =========================================================
# COMPLAINT ASSISTANT
# =========================================================

@app.post("/api/complaints/draft")
@limiter.limit("15 per minute")
def complaint():

    data = request.get_json(silent=True) or {}

    category = clean_text(
        data.get("category", "General"),
        100
    )

    description = clean_text(
        data.get("description", ""),
        6000
    )

    location = clean_text(
        data.get("location", ""),
        500
    )

    name = clean_text(
        data.get("name", ""),
        150
    )

    state = clean_text(
        data.get("state", ""),
        100
    )

    language = clean_text(
        data.get("language", "English"),
        30
    )

    if not description:

        return jsonify({
            "error":
            "Complaint description is required."
        }), 400

    if not validate_category(category):

        return jsonify({
            "error":
            "Invalid complaint category."
        }), 400


    portal = get_portal(
        category,
        state
    )


    prompt = f"""
Write a formal complaint letter for an Indian citizen.

Write the complete letter in {language}.

Use only the facts supplied.

Rules:

- Do not invent department names.
- Do not invent dates.
- Do not invent laws.
- Do not invent addresses.
- Do not invent evidence.
- Keep it respectful.
- Keep it clear.
- Include a subject.
- Use placeholders only for missing contact information.

Category:
{category}

State:
{state}

Location:
{location}

Citizen name:
{name}

Issue:
{description}

Return only the complaint letter.
"""

    result, error = generate_text(prompt)

    if error:

        return jsonify({
            "error": error
        }), 502


    return jsonify({

        "letter": result,

        "portal": portal

    })


# =========================================================
# FILE TOO LARGE ERROR
# =========================================================

@app.errorhandler(413)
def too_large(e):

    return jsonify({
        "error":
        "File is too large. Maximum allowed size is 10 MB."
    }), 413


# =========================================================
# RUN APPLICATION
# =========================================================

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))

    app.run(
        host="0.0.0.0",
        port=port,
        debug=False
    )