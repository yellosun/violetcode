import clsx from "clsx";
import { HashLink } from "react-router-hash-link";
import { routesFlat } from "../../routes";
import { MailIcon, PersonIcon } from "../../assets/icons";

export default function Header() {
  return (
    <code className={container}>
      <HashLink smooth to={"#" + routesFlat.landing} className={baseLinkStyle}>
        {"<"} <div className="mx-2” py-2 tracking-widest">VM</div> {"/>"}
      </HashLink>
      <div className="flex items-center mr-10">
        <div className="flex items-center mr-4">
          <a
            target="_blank"
            className={iconStyle}
            href="https://www.linkedin.com/in/violetmoon/"
          >
            <PersonIcon className="mr-2" /> LinkedIn
          </a>
          <span className="px-4">{"/"}</span>
          <a
            target="_blank"
            className={iconStyle}
            href="mailto:violetwmoon@gmail.com"
          >
            <MailIcon className="mr-2" />
            Email
          </a>
        </div>
      </div>
    </code>
  );
}

const container = clsx(
  "flex justify-between items-center w-full fixed text-sm top-0 mt-4 z-20"
);
const baseLinkStyle = clsx(
  "flex w-[200px] bg-gradient-to-r from-red to-orange justify-center items-center"
);
const iconStyle = clsx(
  "flex italic px-4 py-2 items-center hover:border-b text-xs hover:shadow-md px-6 py-2"
);
