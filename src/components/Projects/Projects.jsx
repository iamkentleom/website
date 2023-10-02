import { HiOutlineArrowSmRight } from "react-icons/hi";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "TempFileShare",
      description:
        "A web application that lets you share files over the internet temporarily.",
      teckStack: ["svelte", "firebase", "tailwindcss"],
    },
    {
      title: "DarkerJupyter",
      description:
        "A browser extension that restyles Jupyter Notebooks to a darker theme.",
      teckStack: ["manifest.json", "css", "html"],
    },
    {
      title: "tinyurl-rest-wrapper",
      description: "A RESTful API wrapper for TinyURL.",
      teckStack: ["flask", "html", "tailwindcss"],
    },
    {
      title: "zippr",
      description: "Releases archiving automation tool.",
      teckStack: ["nodejs", "archiver", "commander"],
    },
  ];

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
