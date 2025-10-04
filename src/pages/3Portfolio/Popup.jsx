import clsx from "clsx";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { OpenIcon } from "../../assets/icons";

export default function PopUp({ onClose, item }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <motion.div
      className={parentContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className={externalBtn} onClick={onClose}>
        &times;
      </button>
      <motion.div
        className={bodyContainer}
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className={innerParent}>
          <div className="md:w-1/2 md:mr-6 mt-4">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="md:text-4xl text-2xl font-bold"
            >
              {item.title}
            </a>
            <div className={companyText}>{item.company}</div>
            <div className="md:mb-8 mb-4">
              <div className={subtitle}>Platform</div>
              <div className="flex md:flex-col flex-row">
                {item.interface &&
                  item.interface.map((tool, idx) => (
                    <div key={idx} className="mr-2">
                      {tool}
                    </div>
                  ))}
              </div>
            </div>
            <div className="md:mb-4 ">
              <div className={subtitle}>Description</div>
              <code className="text-xxs flex">{item.desc}</code>
            </div>
          </div>

          <div className={imgContainer}>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyle}
              >
                <code className={viewText}>view</code>
                <OpenIcon className="h-6 w-6" />
              </a>
            )}
            <img
              className="mt-2 md:mt-0"
              src={item.video ? item.video : item.image}
              alt={item.caption}
            />
            <code className={caption}>{item.caption}</code>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const innerParent = clsx("text-bg flex flex-col-reverse md:flex-row");
const companyText = clsx(
  "md:text-xl tracking-widest md:mt-2 mt-1 md:mb-6 mb-4"
);
const viewText = clsx("text-xs uppercase tracking-widest pl-2 mr-1 hidden md:block");
const caption = clsx("text-[8px] italic flex pt-4 text-center");
const subtitle = clsx(
  "tracking-widest mb-2 pb-2 text-xs uppercase border-b border-bg/40 w-1/3 font-bold"
);
const imgContainer = clsx(
  "md:w-1/2 flex items-center justify-center flex-col md:ml-4"
);
const bodyContainer = clsx(
  "relative bg-text p-6 rounded-sm w-full lg:w-2/3 shadow-lg flex min-h-[500px] h-screen md:h-auto flex items-start"
);
const buttonStyle = clsx(
  "text-text hover:scale-[0.98] mr-4 mt-4 top-0 mb-6 right-0",
  " md:w-20 md:h-10 w-12 h-12 absolute flex items-center justify-center rounded-full shadow-lg bg-orange"
);
const externalBtn = clsx(
  "absolute top-0 left-0 md:left-auto md:right-0 mt-4 hover:scale-[0.98] md:mr-10 ml-4 text-text z-60 md:text-6xl text-3xl",
  " w-12 h-12 z-30 bg-bg md:bg-transparent rounded-full"
);
const parentContainer = clsx(
  "fixed inset-0 bg-bg/80 flex items-center justify-center z-50"
);
