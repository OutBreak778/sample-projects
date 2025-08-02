# 🧠 AI Feedback Assistant

A simple web app built using **Next.js** that lets users ask any question and receive real-time responses from Google's **Gemini LLM** as i have used the Google gemini for the feedbacks

---

## 🚀 Features

- ✍️ Input field to ask any question
- 🤖 Connected to Gemini LLM (Google AI Studio)
- ⚡ Fast real-time responses
- 🎨 Minimal UI with TailwindCSS
- 🔗 Clean API route handling in Next.js App Router

---

## 🛠 Tech Stack

- **Frontend & Backend**: Next.js (App Router)
- **Styling**: TailwindCSS
- **AI Integration**: Gemini API (`gemini-pro` model)
- **Language**: TypeScript

---

## ⚙️ Local Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/ai-feedback-assistant.git
cd ai-feedback-assistant
```

npm install
GEMINI_API_KEY=your_google_api_key_here
npm run dev
App will be live at:
http://localhost:3000

💬 How It Works
1. You enter a question in the input box.
2. The frontend sends the question to a backend route (/api/feedback).
3. The backend sends the prompt to Gemini LLM.
4. Gemini responds with an AI-generated answer.
5. The response is shown on the screen.

## 📸 Screenshot

![App Screenshot](./public/screenshot 2025-08-02 232055.png)
