from supabase import create_client
import os
from dotenv import load_dotenv

load_dotenv()
supabase = create_client(os.getenv("SUPABASE_DB_URL"), os.getenv("SUPABASE_API_KEY"))


def store_chunks(chunks, embeddings):
    for chunk, emb in zip(chunks, embeddings):
        supabase.table("documents").insert({
            "content": chunk,
            "embedding": emb,
        }).execute()


def get_all_chunks(course_id: str):
    res = supabase.table("documents") \
        .select("content") \
        .execute()
    return res.data


def search_similar(query_embedding):
    result = supabase.rpc("match_documents", {
        "query_embedding": query_embedding,
        "match_count": 5
    }).execute()
    return result.data