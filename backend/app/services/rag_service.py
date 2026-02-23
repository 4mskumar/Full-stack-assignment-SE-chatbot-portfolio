from google import genai
from dotenv import load_dotenv
import os
from app.services.embedding_services import embed_text
from app.db.vector_store import search_similar


load_dotenv()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
print(os.getenv("GEMINI_API_KEY"))


def rag_chat(query: str):
    query_emb = embed_text(query)
    docs = search_similar(query_emb)

    context = " ".join([d["content"] for d in docs])

    prompt = f"""
Answer ONLY from the context below. Dont say from above context or based on context. If someone says hi or hello greet them only with simple "Hello there!". If not found, say "I don't know, ask something else".

Context:
{context}

Question: {query}
"""

    response = client.models.generate_content(
        model="models/gemini-2.5-flash",
        contents=prompt
    )

    return response.text