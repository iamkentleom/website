import { HiChevronRight, HiOutlineArrowSmRight } from "react-icons/hi";
import ExperienceCard from "./ExperienceCard";
import experience from "../../content/experience";

const Experience = () => {
  return (
    <section id="experience" aria-label="Work Experience">
      <h2 className="text-sm font-bold sticky py-4 top-0 bg-slate-50 md:hidden">
        EXPERIENCE
      </h2>
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
      <div className="flex justify-end items-center">
        <a
          href="https://drive.google.com/file/d/1fzn-GgAMpDDiWu2d7Uom4O0dYYeZErCX/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-[2px] group text-sm font-bold hover:text-gray-800"
        >
          view resume <HiChevronRight className="group-hover:hidden mt-[2px]" />
          <HiOutlineArrowSmRight className="hidden group-hover:block mt-[2px]" />
        </a>
      </div>
    </section>
  );
};

export default Experience;
