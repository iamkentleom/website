import { HiChevronRight, HiOutlineArrowSmRight } from "react-icons/hi";
import ProjectCard from "./ProjectCard";
import projects from "../../content/projects";

const Projects = () => {
  return (
    <section id="projects" aria-label="Personal Projects">
      <h2 className="text-sm font-bold sticky py-4 top-0 bg-white md:hidden">
        PROJECTS
      </h2>
      {projects.map((e, i) => (
        <ProjectCard
          image={e.image}
          title={e.title}
          description={e.description}
          techStack={e.teckStack}
          link={e.link}
          key={i}
        />
      ))}
      <div className="flex justify-end items-center">
        <a
          href="https://github.com/iamkentleom?tab=repositories"
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
