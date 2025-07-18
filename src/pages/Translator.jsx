import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaExchangeAlt } from "react-icons/fa";
import { MdOutlineContentCopy, MdTranslate } from "react-icons/md";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" },
  { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" },
  { code: "zh", name: "Chinese" },
  { code: "ru", name: "Russian" }
];

const Translator = () => {
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("hi");

  const translate = useCallback(async () => {
    if (!input.trim()) return;

    try {
      const response = await fetch("https://deep-translate1.p.rapidapi.com/language/translate/v2", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com"
        },
        body: JSON.stringify({
          q: input,
          source: sourceLang,
          target: targetLang
        })
      });

      const result = await response.json();
      setTranslated(result.data.translations.translatedText);
    } catch (err) {
      console.error("Translation error:", err);
      setTranslated("Translation failed.");
    }
  }, [input, sourceLang, targetLang]);

  useEffect(() => {
    translate();
  }, [translate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-black text-white pt-24 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10"
      >
        <motion.h1 className="text-4xl md:text-6xl font-extrabold text-center mb-8 text-yellow-400 drop-shadow-lg">
        <MdTranslate className="inline-block mr-3 text-orange-400" />
        Translate Anything Instantly
      </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          {/* Source Language */}
          <select
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            className="bg-black/50 border border-white/20 px-4 py-2 rounded-lg text-white focus:outline-none"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code} className="text-black">
                {lang.name}
              </option>
            ))}
          </select>

          <FaExchangeAlt className="text-2xl text-yellow-400 rotate-90 md:rotate-0" />

          {/* Target Language */}
          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="bg-black/50 border border-white/20 px-4 py-2 rounded-lg text-white focus:outline-none"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code} className="text-black">
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Text */}
          <textarea
            placeholder="Enter text to translate..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-40 bg-black/30 p-4 rounded-xl border border-white/10 text-white placeholder:text-white/40 focus:outline-none resize-none"
          />

          {/* Output Translation */}
          <div className="w-full h-40 bg-black/30 p-4 rounded-xl border border-white/10 text-white overflow-auto">
            {translated || <span className="text-white/40">Translation will appear here...</span>}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Translator;
