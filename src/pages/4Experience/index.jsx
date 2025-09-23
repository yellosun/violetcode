import clsx from "clsx";
import { motion } from "framer-motion";
import { routesFlat } from "../../routes";
import { work } from "../../helpers/constants";

// 🔹 Helper: Convert duration string → total months
function parseDuration(durationStr) {
  const yearMatch = durationStr.match(/(\d+)\s*year/);
  const monthMatch = durationStr.match(/(\d+)\s*month/);

  const years = yearMatch ? parseInt(yearMatch[1], 10) : 0;
  const months = monthMatch ? parseInt(monthMatch[1], 10) : 0;

  return (years * 12 + months) * 2;
}

// 🔹 Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
};

export default function Experience() {
  const convertIndexToColor = (index, style) => {
    if (index < 5) {
      const orangeStyle = `${style}-orange`;
      if (style === "border" && index > 1) {
        return orangeStyle + ` ${style}-dotted`;
      }
      return orangeStyle;
    }
    return `${style}-red ${style}-dotted`;
  };

  return (
    <motion.div
      className={parentContainer}
      id={routesFlat.experience}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col items-center justify-center w-full">
        {work.map((job, idx) => {
          const months = parseDuration(job.duration);
          const spacing = months * 8; // px per month

          return (
            <motion.div
              key={idx}
              className={clsx(jobContainer, "snap-start")} // 👈 Snap each job
              style={{ minHeight: "100vh", height: spacing }} // full viewport + scaled
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center absolute w-[600px] md:w-[600px]">
                {/* Time Info */}
                <div className={timeContainer}>
                  <div className="text-sm">{job.duration}</div>
                  <code className="mt-1 text-xxs">{job.date}</code>
                  <code className="mt-1 text-xxs">{job.location}</code>
                </div>

                {/* Job Info */}
                <div className="mb-4 flex flex-col text-center w-2/3 ml-20">
                  <div className="font-bold">{job.title}</div>
                  <code className="text-xxs mt-1">{job.company}</code>
                  <code className="mt-2 text-xxs text-justify">{job.desc}</code>
                </div>
              </div>

              {/* Timeline Dot */}
              <motion.div
                className={clsx(convertIndexToColor(idx, "bg"), dotStyle)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.2, type: "spring" }}
                whileHover={{ scale: 1.3 }}
              />

              {/* Connecting Line */}
              {idx < work.length && (
                <motion.div
                  className={clsx(
                    convertIndexToColor(idx, "bg"),
                    "absolute left-0 w-[2px]"
                  )}
                  initial={{ height: 0 }}
                  animate={{ height: spacing }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

// 🔹 Tailwind utility classes
const parentContainer = clsx(
  "h-screen w-screen overflow-y-scroll flex items-start justify-center snap-y snap-mandatory"
);
const jobContainer = clsx(
  "flex flex-col relative justify-center items-center h-full w-[200px]"
);
const timeContainer = clsx("text-xs flex flex-col text-center w-1/3");
const dotStyle = clsx("rounded-full -ml-[200px] w-10 h-10 self-center");
