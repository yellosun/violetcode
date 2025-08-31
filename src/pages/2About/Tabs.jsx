import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

export default function Tabs({ onTextBodyChange, textDisplay }) {
  const htmlLabel = "<HTML />";
  const richTextLabel = "Rich Text Editor";
  const previewLabel = "DOM";

  const tabOptions = [previewLabel, htmlLabel, richTextLabel];

  return (
    <>
      <div className="flex relative">
        {tabOptions.map((option) => {
          const isActive = textDisplay === option;
          return (
            <code
              key={option}
              onClick={() => onTextBodyChange(option)}
              className={clsx(
                tabStyle,
                isActive ? "text-bg" : " border border-b-[0] border-t-text border-x-text"
              )}
            >
              {/* Background highlight sits at lowest layer */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-t-md bg-text z-0"
                  transition={{ type: "spring", stiffness: 200, damping: 100 }}
                />
              )}

              {/* Circle hops ON TOP of background */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    key={option}
                    initial={{ scale: 0, y: -10, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0, y: -10, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    className={circleStyle}
                  />
                )}
              </AnimatePresence>

              {/* Text stays above background but below circle */}
              <span className="relative z-10">{option}</span>
            </code>
          );
        })}
      </div>
      <div className="mb-10 w-[800px] border-text border-[.1px]" />
    </>
  );
}

const tabStyle = clsx(
  "rounded-t-md px-6 relative py-2 font-bold tracking-widest mr-2 cursor-pointer"
);

const circleStyle = clsx(
  "absolute top-0 left-0 h-4 w-4 rounded-full -mt-1 -ml-1 bg-orange z-20"
);
