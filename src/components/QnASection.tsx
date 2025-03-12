"use client";
import { useState } from "react";

interface QnAProps {
  qna: { user: string; question: string; answer: string }[];
}

const QnASection = ({ qna }: QnAProps) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState(qna);

  const handleAskQuestion = () => {
    if (newQuestion.trim() === "") return;

    const newQnA = { user: "You", question: newQuestion, answer: "Awaiting seller response..." };
    setQuestions([...questions, newQnA]);
    setNewQuestion(""); // Clear input
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Customer Q&A</h2>

      {/* Question List */}
      <div className="mt-2">
        {questions.map((q, index) => (
          <div key={index} className="border-b border-gray-300 py-2">
            <p className="font-semibold">{q.user}: <span className="font-normal">{q.question}</span></p>
            <p className="text-gray-600">{q.answer}</p>
          </div>
        ))}
      </div>

      {/* Ask a Question */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Ask a question..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <button onClick={handleAskQuestion} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </div>
    </div>
  );
};

export default QnASection;
