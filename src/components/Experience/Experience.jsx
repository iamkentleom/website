import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experience = [
    {
      start: "Dec 2022",
      end: "Present",
      position: "Full Stack Developer",
      company: "NuWorks Interactive Labs, Inc.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ea consectetur, iusto placeat sapiente esse corporis ullam ipsa maxime veritatis, repellat, minima explicabo? Ratione enim labore voluptatem impedit quam tenetur? Nesciunt amet culpa enim iusto minus veritatis distinctio",
    },
    {
      start: "Jun 2021",
      end: "Dec 2021",
      position: "Development Lead",
      company: "FlipToons",
      description:
        "Led the development of Fliptoons, a privacy-first comic reading platform implementing web monetization through Coil and backed by Grant for the Web. Spearheaded the development of Fliptoons API using Express, MongoDB, and Cloudinary. And on the frontend, utilizing NuxtJS and TailwindCSS.",
    },
    {
      start: "July 2021",
      end: "Aug 2021",
      position: "Web Development Intern",
      company: "Abstract Digital Inc.",
      description:
        "Worked on an internal tool for block (work tasks) monitoring of developers and designers. Assigned on the backend using Express and PostgreSQL, created a slack bot for attendance and block update announcements, and helped on the frontend by developing the necessary forms in React.",
    },
  ];

  return (
    <div>
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
      <a href="#" className="flex justify-end text-sm font-bold">
        view resume
      </a>
    </div>
  );
};

export default Experience;
