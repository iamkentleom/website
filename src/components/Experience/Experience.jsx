import { HiChevronRight, HiOutlineArrowSmRight } from "react-icons/hi";
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
        view resume <HiChevronRight className="group-hover:hidden mt-[2px]" />
        <HiOutlineArrowSmRight className="hidden group-hover:block mt-[2px]" />
      </a>
    </div>
  );
};

export default Experience;
