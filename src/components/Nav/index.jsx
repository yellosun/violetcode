import clsx from "clsx";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { routesFlat } from "../../routes";

export default function Nav() {
  const [selectedRoute, setSelectedRoute] = useState(routesFlat.landing);
  
  useEffect(() => {
    const sections = Object.values(routesFlat).map((route) =>
      document.getElementById(route || "landing")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (window.scrollY < 510 && !visible) {
          setSelectedRoute(routesFlat.landing);
          window.history.pushState("", "Landing", "");
        } else if (visible) {
          setSelectedRoute(visible.target.id);
          window.history.pushState(
            visible.target.id,
            visible.target.id.uppercase(),
            "#" + visible.target.id
          );
        }
      },
      { threshold: 0.6 } // 60% visible to count as active
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={container}>
      <div className="mb-2 md:h-80 h-[360px] w-[1px] mr-[5px] bg-text/40" />
      {Object.values(routesFlat).map((route, idx) => {
        return (
          <>
            <HashLink
              smooth
              to={"#" + route}
              key={idx}
              onClick={() => setSelectedRoute(route)}
              className={linkStyle}
            >
              <code className={linkTextStyle}>
                {/* {"<"} */}
                {route ? route : "intro"}
                {/* {" />"} */}
              </code>
              <div
                className={clsx(
                  "ml-2 rounded-full h-[12px] w-[12px] -mt-1 ",
                  selectedRoute === route
                    ? "bg-red"
                    : "bg-text/60 group-hover:bg-orange"
                )}
              ></div>
            </HashLink>
            <div className={lineStyle} />
          </>
        );
      })}
    </div>
  );
}

const container = clsx(
  "fixed right-0 h-full flex flex-col justify-center items-end md:mr-10 mr-4 z-10"
);
const linkStyle = clsx(
  "cursor-pointer flex items-center w-[130px] justify-end group"
);
const linkTextStyle = clsx("text-xs hidden lg:flex capitalize group-hover:border-b h-[20px]");
const lineStyle = clsx("bg-text/40 my-2 h-4 w-[1px] last:md:h-80 last:h-[360px] mr-[5px]");
