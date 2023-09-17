const ProjectCard = ({
  image = "https://placehold.co/144x96/d9d9d9/d9d9d9",
  title = "Title",
  description = "description",
  techStack = ["backend", "frontend", "database"],
}) => {
  return (
    <div className="grid grid-cols-3 my-8">
      <img
        src={image}
        alt={title}
        className="w-36 h-24 bg-gray-200 border-none rounded-lg"
      />
      <div className="col-span-2 flex flex-col justify-between">
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex gap-x-4 mb-1">
          {techStack.map((e, i) => (
            <span className="text-xs mono-font" key={i}>
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
