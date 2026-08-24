
import os, base64, requests

def _url():
    key=os.getenv("GEMINI_API_KEY","").strip()
    model=os.getenv("GEMINI_MODEL","gemini-2.0-flash")
    if not key: return None
    return f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}"

def generate_text(prompt):
    url=_url()
    if not url:return None,"GEMINI_API_KEY is missing. Add it to .env."
    payload={"contents":[{"parts":[{"text":prompt}]}],
             "generationConfig":{"temperature":0.2,"maxOutputTokens":1800}}
    try:
        r=requests.post(url,json=payload,timeout=60)
        if r.status_code>=400:return None,f"AI service error ({r.status_code}). Check the API key/model and try again."
        d=r.json()
        return d["candidates"][0]["content"]["parts"][0]["text"],None
    except requests.RequestException:
        return None,"AI service is temporarily unavailable."
    except (KeyError,IndexError,TypeError):
        return None,"AI returned an unexpected response."

def analyze_file(data,mime,language):
    url=_url()
    if not url:return None,"GEMINI_API_KEY is missing. Add it to .env."
    encoded=base64.b64encode(data).decode("ascii")
    prompt=f"""Analyze this document/image for an Indian citizen and explain it in {language}.
Do not invent facts. If text is unreadable, say so.
Use headings:
Document type
Key information
Important dates
Requirements/documents
What this means in simple words
Warnings or actions"""
    payload={"contents":[{"parts":[{"text":prompt},{"inline_data":{"mime_type":mime,"data":encoded}}]}],
             "generationConfig":{"temperature":0.2,"maxOutputTokens":1800}}
    try:
        r=requests.post(url,json=payload,timeout=90)
        if r.status_code>=400:return None,f"AI service error ({r.status_code})."
        d=r.json()
        return d["candidates"][0]["content"]["parts"][0]["text"],None
    except Exception:
        return None,"Could not analyze the uploaded file."
