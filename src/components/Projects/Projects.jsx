import { HiOutlineArrowSmRight } from "react-icons/hi";
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
        <HiOutlineArrowSmRight className="group-hover:translate-x-1 mt-[2px] transition-transform" />
      </a>
    </div>
  );
};

export default Projects;
