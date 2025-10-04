import clsx from "clsx";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { routesFlat } from "../../routes";
import { MailIcon, CopyIcon, PersonIcon } from "../../assets/icons";

export default function Header() {
  const [codeCopied, setCodeCopied] = useState(false);

  const copyCode = () => {
    if (!codeCopied) {
      setCodeCopied(true);

      // Copy the text inside the text field
      navigator.clipboard.writeText('violetwmoon@gmail.com');
    }
  };

  useEffect(() => {
    if (codeCopied) {
      setTimeout(() => {
        setCodeCopied(false);
      }, 1500);
    }
  }, [codeCopied]);
  const Seperator = () => <span className="px-4 hidden md:flex">{"/"}</span>;

  return (
    <code className={container}>
      <HashLink smooth to={"#" + routesFlat.landing} className={baseLinkStyle}>
        {"<"} <div className="mx-2” py-2 tracking-widest">VM</div> {"/>"}
      </HashLink>
      <div className="flex items-center md:mr-10">
        <div className="flex items-center mr-4">
          <div
            onClick={copyCode}
            className={clsx(
              (codeCopied ? "text-green border-green " : "") + iconStyle
            )}
          >
            <MailIcon className="mr-2 h-4 w-4" />

            {codeCopied ? <span>Copied!</span> : <span>Email</span>}
          </div>
          <Seperator />
          <a
            target="_blank"
            className={desktopOnlyIcon}
            href="https://www.linkedin.com/in/violetmoon/"
          >
            <PersonIcon className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
          <Seperator />
          <a
            target="_blank"
            className={desktopOnlyIcon}
            href="https://www.github.com/yellosun"
          >
            <CopyIcon className="mr-2 h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </code>
  );
}

const container = clsx(
  "flex justify-between items-center w-full text-sm mt-4 z-50"
);
const baseLinkStyle = clsx(
  "flex w-[200px] bg-gradient-to-r from-red to-orange justify-center items-center"
);
const iconStyle = clsx(
  "flex italic px-4 py-2 items-center hover:underline text-xs hover:shadow-md px-6 py-2 cursor-pointer"
);
const desktopOnlyIcon = clsx(iconStyle, "hidden md:flex");
