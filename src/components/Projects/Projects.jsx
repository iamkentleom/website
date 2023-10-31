import { HiChevronRight, HiOutlineArrowSmRight } from "react-icons/hi";
import ProjectCard from "./ProjectCard";
import projects from "../../content/projects";

const Projects = () => {
  return (
    <div>
      {projects.map((e, i) => (
        <ProjectCard
          title={e.title}
          description={e.description}
          techStack={e.teckStack}
          key={i}
        />
      ))}
      <a
        href="#"
        className="flex justify-end items-center gap-[2px] group text-sm font-bold"
      >
        view all projects{" "}
        <HiChevronRight className="group-hover:hidden mt-[2px]" />
        <HiOutlineArrowSmRight className="hidden group-hover:block mt-[2px]" />
      </a>
    </div>
  );
};

export default Projects;
