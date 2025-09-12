import { routesFlat } from "../../routes";
import { tools, work } from "../../helpers/constants";

export default function Experience() {
  return (
    <div
      className="h-screen flex items-center max-w-[800px]"
      id={routesFlat.experience}
    >
      {work.map((job) => {
        return (
          <div key={job.title}>
            <div>{job.title}</div>
            <div className="flex text-xs">
              <div>{job.company}</div>
              <div>{job.location}</div>
            </div>
            <div className="flex text-xs">
              <div>{job.date}</div>
              <div>{job.duration}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
