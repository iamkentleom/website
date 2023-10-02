import { HiOutlineArrowSmRight } from "react-icons/hi";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experience = [
    {
      start: "Dec 2022",
      end: "Present",
      position: "Jr. Full Stack Developer",
      company: "NuWorks Interactive Labs, Inc.",
      description:
        "Worked on performance marketing tools for a digital bank. Developed a custom ecommerce platform for a client, contributing to both backend and frontend. Performed VAPT remediations for a messenger chatbot app. Engaged on building a donation site for a non-profit organization.",
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
      start: "Jul 2021",
      end: "Aug 2021",
      position: "Web Development Intern",
      company: "Abstract Digital Inc.",
      description:
        "Worked on an internal tool for block (work tasks) monitoring of developers and designers. Assigned on the backend using Express and PostgreSQL, created a slack bot for attendance and block update announcements, and helped on the frontend by developing the necessary forms in React.",
    },
    {
      start: "Aug 2019",
      end: "May 2020",
      position: "Community Lead",
      company: "Developer Students Club UP Cebu",
      description:
        "Led several workshops intended for UP Cebu students about git, web development, and mobile app development.",
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
      <a
        href="#"
        className="flex justify-end items-center gap-[2px] group text-sm font-bold"
      >
        view resume{" "}
        <HiOutlineArrowSmRight className="group-hover:translate-x-1 mt-[2px] transition-transform" />
      </a>
    </div>
  );
};

export default Experience;
