import React, { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMagic } from "react-icons/fa";

const Generator = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [mode, setMode] = useState("username");

  const generateOutput = useCallback(() => {
    const words = prompt.trim().split(/\s+/);
    if (!prompt) return setResponse("Please enter something to generate ✨");

    if (mode === "username") {
      const suffix = Math.floor(Math.random() * 1000);
      const styles = ["_", ".", ""]; 
      const sep = styles[Math.floor(Math.random() * styles.length)];
      const formatted = words
        .map((word) =>
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(sep);
      setResponse(`@${formatted}${suffix}`);
    } else if (mode === "password") {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|";
      const base = words.join("");
      let password = base;
      while (password.length < 12) {
        password += chars[Math.floor(Math.random() * chars.length)];
      }
      setResponse(password.slice(0, 16));
    } else if (mode === "sentence") {
      const examples = [
  `The ${words[0]} ${words[1] || "creature"} danced in moonlight, dreaming of stars.`,
  `Once upon a time, a ${words[0]} ${words[1] || "wanderer"} changed the world.`,
  `Every line starts with a ${words[0]}, and ends in wonder.`,
  `In a world of code and chaos, the ${prompt} ruled the logic.`,
  `What happens when ${prompt} meets destiny? Pure poetry.`,
  `They called it "${prompt}" — and it echoed through every silent room.`,
  `Beneath the twilight sky, a ${words[0]} whispered secrets no one else heard.`,
  `"${prompt}" wasn’t just a word. It was a revolution in disguise.`,
  `When ${words[0]} met hope, something beautiful was born.`,
  `It all started with a ${words[0]} and a dream too big to ignore.`,
  `Even the stars paused when they heard the word "${prompt}".`,
  `The world didn’t change overnight — it changed with ${prompt}.`,
  `“${prompt}” — strange how one thought can paint entire worlds.`,
  `They laughed at "${prompt}", until it became their obsession.`,
  `In a library of a million tales, "${prompt}" stood alone.`,
  `Not all storms scream. Some whisper "${words[0]}" instead.`,
  `Every legend starts with someone who believed in "${prompt}".`,
  `If silence had a name, today it would be "${words[0]}".`,
  `"${words[0]}" was never just a word — it was a warning, a promise, a path.`,
  `They stitched "${prompt}" into the sky and called it prophecy.`,
  `What began as a whisper of "${prompt}" became the anthem of a generation.`,
  `To those who dared to dream, "${prompt}" was more than a thought — it was a way.`,
];

      const index = Math.floor(Math.random() * examples.length);
      setResponse(examples[index]);
    }
  }, [prompt, mode]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      generateOutput();
    }
  };

  useEffect(() => {
    setResponse("");
  }, [mode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-black text-white pt-24 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-yellow-400 drop-shadow-lg flex items-center justify-center gap-2">
          <FaMagic /> Magic String Generator
        </h1>

        <p className="text-center text-gray-300 mb-6 max-w-xl mx-auto">
          Describe what you want and let AI craft the perfect string — from random usernames to creative lines.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="bg-black/50 border border-white/20 px-4 py-2 rounded-lg text-white focus:outline-none"
          >
            <option value="username">Username</option>
            <option value="password">Password</option>
            <option value="sentence">Creative Sentence</option>
          </select>

          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="cool tiger"
            className="w-full md:w-2/3 px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none placeholder:text-white/40"
          />

          <button
            onClick={generateOutput}
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-semibold text-black shadow-lg transition"
          >
            Generate
          </button>
        </div>

        <div className="mt-6 bg-black/20 border border-white/20 rounded-xl p-4 min-h-[80px] text-lg text-white text-center">
          {response ? (
            <p>
              <span className="text-yellow-400">Generated</span> response for: <em>"{prompt}"</em> ✨
              <br />
              <span className="text-white font-mono text-xl">{response}</span>
            </p>
          ) : (
            <span className="text-white/40">Your output will appear here...</span>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Generator;
