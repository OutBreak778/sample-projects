from sentence_transformers import SentenceTransformer
import chromadb
from chromadb.config import Settings
from chromadb.utils.embedding_functions import SentenceTransformerEmbeddingFunction

# Initialize Chroma
embedding_function = SentenceTransformerEmbeddingFunction(model_name="all-MiniLM-L6-v2")
client = chromadb.PersistentClient(path=".chromadb")

collection = client.get_or_create_collection(
    name="docs",
    embedding_function=embedding_function
)

model = SentenceTransformer("all-MiniLM-L6-v2")

def store_chunks(docs):
    collection.delete(where={"*": True})  # clear existing
    for doc in docs:
        chunks = doc["chunks"]
        collection.add(
            documents=chunks,
            metadatas=[{"source": doc["filename"]}] * len(chunks),
            ids=[f"{doc['filename']}_{i}" for i in range(len(chunks))]
        )

def retrieve(query, k=3):
    result = collection.query(query_texts=[query], n_results=k)
    return result["documents"][0]

def generate_response(query, chunks):
    context = "\n\n".join(chunks)
    return f"Based on the documents:\n\n{context}\n\nAnswer:\n→ {query}"
