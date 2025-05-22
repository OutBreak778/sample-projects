from PyPDF2 import PdfReader
import docx
import os

def readText(file):
    return file.read().decode('utf-8')

def readPdf(file):
    reader = PdfReader(file)
    text = ""
    for page in reader.pages:
        page_text = page.extract_text()  # ✅ Correct method
        if page_text:
            text += page_text
    return text

def readDocs(file):
    docs = docx.Document(file)
    return '\n'.join([para.text() for para in docs.paragraphs])

def parseFile(file):
    if file.type == "application/pdf":
        return readPdf(file)
    elif file.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return readDocs(file)
    elif file.type == "text/plain":
        return readText(file)
    else:
        return ""
    
def splitText(text, chunkSize=400, overlap=100):
    words = text.split()
    chunks = []

    for i in range(0, len(words), chunkSize - overlap):
        chunk = " ".join(words[i:i + chunkSize])
        chunks.append(chunk)
    return chunks