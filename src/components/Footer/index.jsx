import clsx from "clsx";
import ThemeToggle from "../ThemeToggle";

export default function Footer() {
  return (
    <code className={container}>
      <div className="ml-10 flex items-center">
        <div className="text-xs mr-4">Copyright 2025</div>
        <span className="px-4">{"/"}</span>
        <a
          target="_blank"
          className={linkStyle}
          href="https://github.com/yellosun/violetcode"
        >
          Site Source Code
        </a>
      </div>
      <div className={toggleContainer}>
        <ThemeToggle />
      </div>
    </code>
  );
}

const container = clsx(
  "flex md:justify-between items-center h-20 w-full md:fixed text-sm text-text/40 bottom-0 z-20 mb-4"
);
const toggleContainer = clsx(
  "flex items-center md:mr-20 mr-8 mt-16 md:mt-0 text-text md:relative absolute top-0 right-0"
);
const linkStyle = clsx(
  "flex italic py-1 underline items-center text-xs hover:shadow-md hover:scale-[0.98]"
);
