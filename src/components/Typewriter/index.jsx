import { useState, useEffect } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function Typewriter({
  words,
  typingSpeed = 150,
  deletingSpeed = 80,
  pause = 1000,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedLetters, setDisplayedLetters] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[currentWordIndex];

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayedLetters.length < currentWord.length) {
      // add next letter
      timeout = setTimeout(() => {
        const letters = Array.from(currentWord);
        setDisplayedLetters(letters.slice(0, displayedLetters.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedLetters.length > 0) {
      // remove last letter
      timeout = setTimeout(() => {
        setDisplayedLetters(
          displayedLetters.slice(0, displayedLetters.length - 1)
        );
      }, deletingSpeed);
    } else if (!isDeleting && displayedLetters.length === currentWord.length) {
      // word fully typed, pause then delete
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayedLetters.length === 0) {
      // word fully deleted, move to next
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [
    displayedLetters,
    isDeleting,
    currentWord,
    words,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);

  return (
    <motion.div className={container}>
      {displayedLetters.map((char, idx) => (
        <motion.span
          className="whitespace-pre"
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        |
      </motion.span>
    </motion.div>
  );
}

const container = clsx(
  "inline-flex overflow-hidden text-6xl font-bold"
);
