import { default as FastMarquee } from "react-fast-marquee";
import clsx from "clsx";

export default function Marquee({ speed = 100 }) {
  return (
    <FastMarquee
      className="w-screen overflow-hidden"
      speed={speed}
      loop={0} // infinite loop
      direction="left" // scrolling right to left
    >
      <div className={iconListContainerStyle}>
        {desktopIconList.reverse().map((icon, index) => {
          const invert = icon?.includes("taskforce") ? " invert" : "";
          return (
            <div
              className={`${invert} flex justify-center lg:mx-10`}
              key={`marquee-item-${index}`}
            >
              <img src={icon} className={iconStyle} loading="eager" />
            </div>
          );
        })}
      </div>
    </FastMarquee>
  );
}

const mobileIconList = [
  "https://logodix.com/logo/1193669.png", // ts
  "https://logodix.com/logo/374704.png", // js
  "https://logodix.com/logo/1169364.png", // css
  "https://logodix.com/logo/470302.jpg", // html
  "https://logodix.com/logo/1660261.png", // rails
  "https://logodix.com/logo/2208303.png", // figma
  "https://logodix.com/logo/812864.png", // git
  "https://miro.medium.com/v2/resize:fit:440/1*J3G3akaMpUOLegw0p0qthA.png", // rest api
  "https://logodix.com/logo/1964143.png", // angular
  "https://logodix.com/logo/1964155.png", // node
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png", // graphql
  "https://logodix.com/logo/1658501.png", // react
  "https://logodix.com/logo/2052339.png", // ruby
  "https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png", // tailwind
];

const desktopIconList = mobileIconList.concat(
  mobileIconList,
  mobileIconList.reverse()
);

const iconStyle = clsx(
  " lg:my-0 mx-2 max-h-[40px] lg:w-auto lg:max-w-[50px] lg:max-h-[70px]"
);
const iconListContainerStyle = clsx(
  "flex flex-wrap items-center justify-center my-4 lg:flex-row"
);
