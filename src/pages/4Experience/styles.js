import clsx from "clsx";

export const parentContainer = clsx(
  " w-screen overflow-y-scroll flex items-start justify-center mt-20 md:mt-0"
);
export const innerParent = clsx(
  "flex flex-col items-center justify-center w-full"
);
export const connectorLine = clsx(
  "md:absolute bottom-0 md:left-0 w-[2px] md:h-20 h-40 border border-[1px] hidden"
);
export const jobAndTimeContainer = clsx(
  "flex flex-col relative justify-center items-center h-full w-[200px] min-h-[600px] md:min-h-full"
);
export const innerJobAndTime = clsx(
  "flex flex-col md:flex-row items-center absolute w-[300px] md:w-[600px]"
);
export const jobContanier = clsx(
  "mb-4 flex flex-col text-center md:w-2/3 md:ml-20 ml-10"
);
export const timeContainer = clsx(
  "text-xs flex flex-col ml-10 md:ml-0 mb-6 pb-6 md:mb-0 w-full border-b md:border-none max-w-[180px] text-center md:w-1/3"
);
export const dotStyle = clsx(
  "rounded-full md:-ml-[200px] -ml-[280px] w-10 h-10 self-center"
);
