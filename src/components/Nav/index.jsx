import clsx from "clsx";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { routesFlat } from "../../routes";

export default function Nav() {
  const [selectedRoute, setSelectedRoute] = useState(routesFlat.landing);

  return (
    <div className="fixed right-0 h-full flex flex-col justify-center items-end mr-10 z-10">
      <div className="mb-2 h-80 w-[1px] mr-[5px] bg-text/40" />
      {Object.values(routesFlat).map((route, idx) => {
        return (
          <>
            <HashLink
              smooth
              to={"#" + route}
              key={idx}
              onClick={() => setSelectedRoute(route)}
              className="cursor-pointer flex items-center w-[130px] justify-end group"
            >
              <code className="text-xs capitalize group-hover:border-b h-[20px]">
                {"<"}
                {route ? route : "intro"}
                {" />"}
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
            <div className="bg-text/40 my-2 h-4 w-[1px] last:h-80 mr-[5px]" />
          </>
        );
      })}
    </div>
  );
}
