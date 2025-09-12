import clsx from "clsx";
import * as comp from '../../components'
import * as pages from '../../pages'

export default function Base() {
  return (
    <div className="flex w-full">
      <comp.Header />
      <comp.Nav />
      <div className={container}>
        <pages.Landing />
        <pages.About />
        <pages.Portfolio />
        <pages.Experience />
        <pages.Contact />
      </div>
      <comp.Footer />
    </div>
  );
}

const container = clsx("flex flex-col items-center justify-center w-full");
