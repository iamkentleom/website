import { HiOutlineArrowSmRight } from "react-icons/hi";
import ExperienceCard from "./ExperienceCard";
import experience from "../../content/experience";

const Experience = () => {
  return (
    <div>
      {experience.map((e, i) => (
        <ExperienceCard
          start={e.start}
          end={e.end}
          position={e.position}
          company={e.company}
          description={e.description}
          key={i}
        />
      ))}
      <a
        href="#"
        className="flex justify-end items-center gap-[2px] group text-sm font-bold"
      >
        view resume{" "}
        <HiOutlineArrowSmRight className="group-hover:translate-x-1 mt-[2px] transition-transform" />
      </a>
    </div>
  );
};

export default Experience;
