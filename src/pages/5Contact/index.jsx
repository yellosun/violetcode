import clsx from "clsx";
import { routesFlat } from "../../routes";
import { MailIcon, PersonIcon } from "../../assets/icons";

const linksAndIcons = [
  {
    link: "mailto:violetwmoon@gmail.com",
    icon: <MailIcon className="h-10" />,
    display: "Send",
    subText: "(an email)",
  },
  {
    link: "https://www.linkedin.com/in/violetmoon/",
    icon: <PersonIcon className="h-10" />,
    display: "Connect",
    subText: "(on LinkedIn)",
  },
  {
    link: "https://www.github.com/yellosun",
    icon: <PersonIcon className="h-10" />,
    display: "Copy",
    subText: "(my code)",
  },
  {
    link: "https://www.github.com/yellosun",
    icon: <MailIcon />,
    display: "Download",
    subText: "(my resume)",
  },
];
export default function Contact() {
  return (
    <div className="h-screen flex items-center" id={routesFlat.contact}>
      <div className="flex items-center w-full">
        {linksAndIcons.map(({ link, icon, display, subText }) => (
          <a
            target="_blank"
            className={clsx(
              iconStyle + (display.includes("Download") ? resumeStyle : "")
            )}
            href={link}
          >
            {icon}

            <div className="text-xl mb-1 uppercase tracking-widest">
              {display}
            </div>
            <div className="italic text-xs w-20 text-orange">{subText}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

const iconStyle = clsx(
  "hover:scale-[0.98] px-20 flex text-center h-40 w-40 mr-10 hover:bg-text/5 items-center flex-col justify-center border"
);
const resumeStyle = clsx(
  iconStyle +
    " bg-gradient-to-r from-red to-orange px-0 border-none"
);
