import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const AI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function POST(req: Request) {
  const { question } = await req.json();

  const response = AI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
    1. Please read the question which was given and give the response as the advance feedback.
    2. Make the response as short as possible.
    3. Explain within 3-5 line of words
     ${question}`,
  });

  const data = (await response).candidates?.[0].content?.parts?.[0]?.text;

  const answer = data || "No answer found.";
  return NextResponse.json({ answer });
}
