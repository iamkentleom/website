import { HiChevronRight, HiOutlineArrowSmRight } from "react-icons/hi";
import ExperienceCard from "./ExperienceCard";
import experience from "../../content/experience";

const Experience = () => {
  return (
    <section id="experience" aria-label="Work Experience">
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
          href="https://docs.google.com/document/d/15o7DNuIFCUDZeTz_ZXmEUZ9p4qiJfQIXRy_qvk_r4vs/export?format=pdf&attachment=false"
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
