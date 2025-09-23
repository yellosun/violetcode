import clsx from "clsx";
import { routesFlat } from "../../routes";
import {
  CopyIcon,
  DownloadIcon,
  MailIcon,
  PersonIcon,
} from "../../assets/icons";

const linksAndIcons = [
  {
    link: "mailto:violetwmoon@gmail.com",
    icon: <MailIcon className="h-10 w-10 fill-bg" />,
    display: "Send",
    subText: "Email",
  },
  {
    link: "https://www.linkedin.com/in/violetmoon/",
    icon: <PersonIcon className="h-10 w-10 fill-bg" />,
    display: "Connect",
    subText: "LinkedIn",
  },
  {
    link: "https://www.github.com/yellosun",
    icon: <CopyIcon className="h-10 w-10 fill-bg" />,
    display: "Code",
    subText: "Github",
  },
  {
    link: "https://www.github.com/yellosun",
    icon: <DownloadIcon className="h-10 w-10 fill-bg" />,
    display: "Download",
    subText: "Resume",
  },
];

const bgColor = (index) => {
  if (index === 0) {
    return ' bg-text/40 rotate-[5deg]'
  } else if (index === 1) {
    return ' bg-text/10 -rotate-[1deg]'
  } else if (index === 2) {
    return ' bg-text/20 to-orange'
  } else if (index === 3) {
    return ' bg-text/10 bg-gradient-to-r from-red to-orange rotate-[5deg]'
  }


}
export default function Contact() {
  return (
    <div className="h-screen flex items-center" id={routesFlat.contact}>
      <div className="flex items-center w-full max-w-[600px] flex-wrap">
        {linksAndIcons.map(({ link, icon, subText}, idx) => (
          <a
            target="_blank"
            className={clsx(
              iconStyle + bgColor(idx)
            )}
            href={link}
          >
            {icon}

            <code className="italic text-xxs mt-2 w-20 p-1 rounded-sm bg-bg">{subText}</code>
          </a>
        ))}
      </div>
    </div>
  );
}

const iconStyle = clsx(
  "hover:scale-[0.90] px-0 flex text-center h-60 w-60 w-10 fill-bg items-center flex-col justify-center"
);
const rtoL = clsx('bg-gradient-to-r')
const resumeStyle = clsx(
  iconStyle + " bg-gradient-to-r from-red to-orange "
);
