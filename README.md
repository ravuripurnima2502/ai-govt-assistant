# AI Govt Assistant — Real-World Functional Version

This version is a **functional citizen-assistance application**, not a fake government portal.

## What changed in this version

- Premium government-themed background is stored locally as `static/gov-bg.svg`, so it does not depend on an external image URL.
- Indian tricolour-inspired accents are used throughout the UI: saffron, white and green.
- The large search bar was removed from the hero section.
- Added a **Personalised Scheme Agent** asking:
  - name
  - age
  - annual family income
  - state
  - occupation/profile
  - type of support needed
- The Scheme Agent returns potential scheme matches with official source links.
- Added a clear disclaimer that recommendations are preliminary and are not final eligibility decisions.
- Added UI translation for English, Telugu, Hindi, Tamil and Kannada.
- Voice input follows the selected language where the browser supports it.
- Voice output follows the selected language.
- Added read-aloud controls for major result areas and a page-level voice control.
- Document AI, translation, FAQ and complaint drafting remain connected to Gemini through the backend.
- Complaint letters can be copied/downloaded and handed off to the official portal.

## Real-world boundaries

A third-party website should not claim to submit a government complaint unless the relevant department provides an authorized API/authenticated integration. This app therefore generates the letter and opens the appropriate official portal.

Scheme recommendations are **potential matches**, not guaranteed eligibility. Government rules, dates, income limits and state conditions can change. The official scheme portal remains authoritative.

## Setup

1. Install Python 3.10+.
2. Open this folder in VS Code.
3. Create and activate a virtual environment.

Windows:
```bash
python -m venv venv
venv\\Scripts\\activate
```

macOS/Linux:
```bash
python3 -m venv venv
source venv/bin/activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Copy `.env.example` to `.env`.
6. Add your Gemini API key:
```env
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-2.0-flash
```

7. Run:
```bash
python app.py
```

8. Open:
`http://127.0.0.1:5000`

## Voice

Use Chrome or Edge for the best browser speech-recognition support. The browser will request microphone permission. Voice output uses the browser's Speech Synthesis API.

## Public deployment

For a real public service, use HTTPS, a production WSGI server, secure secret management, a persistent rate-limit store, monitoring, file malware scanning, privacy/retention policies, and regular verification of official URLs and scheme information.
