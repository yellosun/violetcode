import clsx from "clsx";
import { motion } from "framer-motion";
import { routesFlat } from "../../routes";
import { work } from "../../helpers/constants";
import * as styles from "./styles";

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
    if (index < 5 || index === 7) {
      const orangeStyle = `${style}-orange`;
      if (style === "border" && index > 1) {
        return orangeStyle + ` ${style}-dotted`;
      }
       return orangeStyle
    }
    return `${style}-red ${style}-dotted`;
  };

  return (
    <motion.div
      className={styles.parentContainer}
      id={routesFlat.experience}
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.innerParent}>
        {work.map((job, idx) => {
          const months = parseDuration(job.duration);
          const spacing = months * 10; // px per month

          return (
            <motion.div
              key={idx}
              className={styles.jobAndTimeContainer}
              style={{ height: spacing }} // full viewport + scaled
              variants={itemVariants}
            >
              <div className={styles.innerJobAndTime}>
                {/* Time Info */}
                <div className={styles.timeContainer}>
                  <div className="text-sm">{job.duration}</div>
                  <code className="mt-1 text-xxs">{job.date}</code>
                  <code className="mt-1 text-xxs">{job.location}</code>
                </div>

                {/* Job Info */}
                <div className={styles.jobContanier}>
                  <div className="font-bold">{job.title}</div>
                  <code className="text-xxs mt-1">{job.company}</code>
                  <code className="mt-2 text-xxs text-justify">{job.desc}</code>
                </div>
              </div>

              {/* Timeline Dot */}
              <motion.div
                className={clsx(
                  convertIndexToColor(idx, "bg"),
                  styles.dotStyle
                )}
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
                    "absolute left-0 w-[2px] -ml-10 md:ml-0"
                  )}
                  initial={{ height: 0 }}
                  animate={{ height: spacing }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                />
              )}
              {idx !== work.length - 1 && (
                <div className={styles.connectorLine} />
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
