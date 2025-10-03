import clsx from "clsx";
import { routesFlat } from "../../routes";
import { Typewriter } from "../../components";
import { typewriterWords } from "../../helpers/constants";
import pfp from "../../assets/headshot.jpg";

export default function Landing() {
  return (
    <div className={container} id={routesFlat.landing}>
      <div className="relative flex justify-center lg:w-1/3">
        <div className=" h-40 w-10 bg-red/10 lg:ml-6 md:-ml-80 -ml-40 -mt-16 lg:right-0 border-text absolute" />
        <div className="h-10 w-20 bg-orange/20 lg:-mr-6 md:-mr-60 -mr-40 top-0 lg:left-0 ml-10 border-text absolute" />
        <img
          src={pfp}
          className="lg:w-full lg:ml-40 ml-0 md:w-1/3 w-2/3 lg:mb-20 mb-10 md:-mt-10 rounded-sm shadow-lg "
          alt="portrait of Violet in a black shirt in front of a white background with light shadows"
        />
      </div>
      <div className={textContainer}>
        <div className=" flex items-center flex-col text-center">
          <div className={innerTextContainer}>
            Hi, I'm Violet.
            <div className="flex items-center">
              <div className="hidden md:flex">I'm a </div>
              <div className={typeContainer}>
                <Typewriter
                  typingSpeed={180}
                  deletingSpeed={80}
                  pause={1200}
                  words={typewriterWords}
                />
              </div>
            </div>
          </div>
          <div>and I help make </div>
          <div className="mt-2">the web.</div>
        </div>
      </div>
    </div>
  );
}

const container = clsx(
  "flex flex-col lg:flex-row items-center justify-center w-full h-screen"
);
const textContainer = clsx(
  "lg:text-6xl text-4xl md:text-4xl mb-4 px-10 tracking-wider font-bold w-full lg:w-2/3 flex items-center flex-col"
);
const innerTextContainer = clsx(
  "flex flex-col text-center justify-center w-full"
);
const typeContainer = clsx(
  " my-4 md:ml-4 flex items-center justify-center md:justify-start bg-gradient-to-r from-red to-orange px-4 py-2 w-[300px] md:w-auto"
);
