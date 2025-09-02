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
      <div className="flex items-center mr-20 text-text">
        <ThemeToggle />
      </div>
    </code>
  );
}

const container = clsx(
  "flex justify-between items-center w-full fixed text-sm text-text/40 bottom-0 z-20 mb-4"
);
const linkStyle = clsx(
  "flex italic py-1 underline items-center text-xs hover:shadow-md hover:scale-[0.98]"
);
