import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div>
      <ul className="flex gap-5 text-2xl">
        <li className="hover:text-gray-800">
          <a href="mailto:leomakibulan@gmail.com" aria-label="Email Address">
            <FaEnvelope />
            <span className="hidden">Email Address</span>
          </a>
        </li>
        <li className="hover:text-gray-800">
          <a
            href="https://www.linkedin.com/in/iamkentleom"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn />
            <span className="hidden">LinkedIn Profile</span>
          </a>
        </li>
        <li className="hover:text-gray-800">
          <a
            href="https://github.com/iamkentleom"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
            <span className="hidden">GitHub Profile</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
