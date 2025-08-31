import { Typewriter } from "../../components";
import { typewriterWords } from "../../helpers/constants";
import { routesFlat } from "../../routes";

export default function Portfolio() {
  return (
    <div
      className="h-screen flex items-center flex-col justify-center"
      id={routesFlat.portfolio}
    >
      <div className="bg-orange rounded-lg h-1/2 p-20">
        <div className="w-[800px] mb-10 text-4xl ">
          In action, that means I'm...
        </div>

        <Typewriter
          words={typewriterWords}
          typingSpeed={180}
          deletingSpeed={80}
          pause={1200}
        />
      </div>
    </div>
  );
}
