import { HiChevronRight, HiOutlineArrowSmRight } from "react-icons/hi";
import ProjectCard from "./ProjectCard";
import projects from "../../content/projects";

const Projects = () => {
  return (
    <section id="projects" aria-label="Personal Projects">
      {projects.map((e, i) => (
        <ProjectCard
          title={e.title}
          description={e.description}
          techStack={e.teckStack}
          link={e.link}
          key={i}
        />
      ))}
      <div className="flex justify-end items-center">
        <a
          href="https://github.com/iamkentleom"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-[2px] group text-sm font-bold hover:text-gray-800"
        >
          view all projects{" "}
          <HiChevronRight className="group-hover:hidden mt-[2px]" />
          <HiOutlineArrowSmRight className="hidden group-hover:block mt-[2px]" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
