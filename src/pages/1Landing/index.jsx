import clsx from "clsx";
import { routesFlat } from "../../routes";
import { Typewriter } from "../../components";
import { typewriterWords } from "../../helpers/constants";
import pfp from "../../assets/violet.JPG";

export default function Landing() {
  return (
    <div className={container} id={routesFlat.landing}>
      <img src={pfp} className="w-60  mb-10 shadow-lg" />
      <div className={textContainer}>
        <div className={innerTextContainer}>
          Howdy, I'm{" "}
          <div className={typeContainer}>
            <Typewriter
              typingSpeed={180}
              deletingSpeed={80}
              pause={1200}
              words={typewriterWords}
            />
          </div>
        </div>
        and I help make the web.
      </div>
    </div>
  );
}

const container = clsx(
  "flex flex-col items-center justify-center w-ful h-screen"
);
const textContainer = clsx(
  "text-6xl mb-4 text-center tracking-wider font-bold"
);
const innerTextContainer = clsx("flex text-center justify-center w-[1200px]");
const typeContainer = clsx(
  "-mt-2 ml-4 flex items-center bg-gradient-to-r from-red to-orange px-4 py-2"
);
