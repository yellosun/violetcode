import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { setTheme, getStoredTheme } from "../../theme";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = getStoredTheme();
    if (stored === "dark") setIsDark(true);
    if (stored === "light") setIsDark(false);
    if (!stored)
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    setTheme(newDark ? "dark" : "light");
  };

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={toggleTheme}
        className="w-14 h-8 bg-text/20 rounded-full p-1 cursor-pointer relative"
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`w-6 h-6 rounded-sm flex items-center justify-center absolute top-1 ${
            isDark ? "right-1" : "left-1"
          }`}
        >
          {isDark ? (
            <span role="img" aria-label="moon">
              🌙
            </span>
          ) : (
            <span role="img" aria-label="sun">
              ☀️
            </span>
          )}
        </motion.div>
      </div>
    </div>
  );
}
