import { HiExternalLink } from "react-icons/hi";

const ProjectCard = ({
  image = "https://placehold.co/144x96/d9d9d9/d9d9d9",
  title = "Title",
  description = "description",
  techStack = ["backend", "frontend", "database"],
  link = "#",
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group grid grid-cols-3 my-8"
    >
      <div className="w-[104px] h-20 md:w-36 md:h-24 rounded-lg overflow-hidden border-[1px] border-gray-200">
        <img
          src={image}
          alt={title}
          className="bg-gray-200 group-hover:scale-125 transition-transform"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-between">
        <div>
          <h3 className="font-bold flex items-center gap-2 hover:text-gray-800">
            {title}{" "}
            <HiExternalLink className="hidden group-hover:inline-block" />
          </h3>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 my-1">
          {techStack.map((e, i) => (
            <p className="text-xs mono-font" key={i}>
              {e}
            </p>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
