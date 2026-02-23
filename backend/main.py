import os
from dotenv import load_dotenv
from fastapi import FastAPI, UploadFile, Form
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from app.services.pdf_service import extract_text_from_pdf
from app.services.embedding_services import chunk_text, embed_text
from app.db.vector_store import store_chunks
from app.services.rag_service import rag_chat

load_dotenv()

app = FastAPI()

origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    query: str


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/process-pdf")
async def process_pdf(file: UploadFile):
    text = extract_text_from_pdf(file.file)
    chunks = chunk_text(text)

    embeddings = []
    for c in chunks:
        embeddings.append(embed_text(c))

    store_chunks(chunks, embeddings)
    return {"message": "PDF processed"}

@app.post("/chat")
def chat(req: ChatRequest):
    answer = rag_chat(req.query)
    return {"answer": answer}