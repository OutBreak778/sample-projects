"use client";
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    setLoading(true);
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    setAnswer(data.answer);
    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-gray-700">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Smart Feedback + AI Assistant
      </h1>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask something..."
        className="w-full max-w-md p-2 border rounded-md mb-4"
      />

      <button
        onClick={askAI}
        className="px-6 py-2 bg-blue-600 text-white rounded-md"
        disabled={loading}
      >
        {loading ? "Thinking..." : "Ask feedback"}
      </button>

      {answer && (
        <div className="mt-6 bg-white shadow-md p-4 rounded-md max-w-md w-full">
          <h2 className="font-semibold mb-2">AI Response:</h2>
          <p>{answer}</p>
        </div>
      )}
    </main>
  );
}
