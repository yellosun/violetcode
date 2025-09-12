import { routesFlat } from "../../routes";

export default function Library() {
  return (
    <div
      className="h-screen flex items-center max-w-[800px]"
      id={routesFlat.library}
    >
      <div className="text-2xl text-[white]">
      LIBRARY
      </div>
    </div>
  );
}
