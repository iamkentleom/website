import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div>
      <ul className="flex gap-5 text-2xl">
        <li>
          <a href="mailto:leomakibulan@gmail.com">
            <FaEnvelope />
            <span className="hidden">Email</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/iamkentleom"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
            <span className="hidden">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/iamkentleom"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <span className="hidden">GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
