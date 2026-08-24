
import io
def extract_text(data,ext):
    try:
        if ext==".txt":
            return data.decode("utf-8",errors="replace"),None
        if ext==".pdf":
            from pypdf import PdfReader
            reader=PdfReader(io.BytesIO(data))
            chunks=[]
            for page in reader.pages:
                chunks.append(page.extract_text() or "")
            return "\n".join(chunks),None
        if ext==".docx":
            from docx import Document
            doc=Document(io.BytesIO(data))
            return "\n".join(p.text for p in doc.paragraphs),None
        return "", "Unsupported document type."
    except Exception as e:
        return "", "Could not read this document. Try a text-based PDF/DOCX/TXT file."
