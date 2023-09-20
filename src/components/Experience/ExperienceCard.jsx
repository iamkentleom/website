const ExperienceCard = ({
  start = "Start Date",
  end = "End Date",
  position = "Position",
  company = "Company",
  description = "Description",
}) => {
  return (
    <div className="grid grid-cols-3 my-6">
      <p className="text-sm uppercase font-bold mt-[2px]">
        {start} - {end}
      </p>
      <div className="col-span-2">
        <h3 className="font-bold">
          {position}, {company}
        </h3>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
