"use client";

import { useState } from "react";

const quotes = [
  "The best way to predict the future is to create it.",
  "Success is not final; failure is not fatal.",
  "Dream big. Start small. Act now.",
  "Do something today that your future self will thank you for.",
  "It always seems impossible until it's done.",
  "Believe you can and you're halfway there.",
  "Your only limit is your mind.",
];

export default function Page() {
  const [quote, setQuote] = useState("Click the button to generate a quote!");

  const generateQuote = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomQuote]);
  };

  return (
    <main
      className="h-screen flex items-center justify-center p-6"
      style={{
        animation: "rainbow 8s linear infinite",
      }}
    >
      {/* Quote box */}
      <style>
        {`
        @keyframes rainbow {
          0% { background-color: #ff0000; }
          16% { background-color: #ff7f00; }
          33% { background-color: #ffff00; }
          50% { background-color: #00ff00; }
          66% { background-color: #0000ff; }
          83% { background-color: #4b0082; }
          100% { background-color: #9400d3; }
        }
        `}
      </style>

      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-6">Rainbow Quote Generator</h1>

        <p className="text-xl italic text-gray-800 mb-8">
          "{quote}"
        </p>

        <button
          onClick={generateQuote}
          className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
        >
          Generate Quote
        </button>
      </div>
    </main>
  );
}
