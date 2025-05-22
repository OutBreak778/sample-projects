import streamlit as st
from utils import parseFile, splitText
from pipeline import store_chunks, retrieve, generate_response

# st.set_page_config(page_title="📚 RAG App - Chat with Your Docs")

st.title("📄 Chat with Your Documents ")

uploaded_files = st.file_uploader("Upload your documents (PDF, DOCX, TXT)", type=["pdf", "docx", "txt"], accept_multiple_files=True)

if uploaded_files:
    parsed_docs = []
    for file in uploaded_files:
        raw_text = parseFile(file)
        chunks = splitText(raw_text)
        parsed_docs.append({"filename": file.name, "chunks": chunks})
    
    store_chunks(parsed_docs)
    st.success("Documents uploaded and indexed successfully!")

    query = st.text_input("Ask a question about your documents:")

    if query:
        with st.spinner("Retrieving answer..."):
            chunks = retrieve(query)
            response = generate_response(query, chunks)
        st.write(response)
