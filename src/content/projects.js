import tempfileshare from "../assets/images/projects/tempfileshare.png";
import darkerjupyter from "../assets/images/projects/darkerjupyter.png";
import tinyurl from "../assets/images/projects/tinyurl.png";
import zippr from "../assets/images/projects/zippr.png";

const projects = [
  {
    image: tempfileshare,
    title: "TempFileShare",
    description:
      "A web application that lets you share files over the internet temporarily.",
    teckStack: ["svelte", "firebase", "tailwindcss"],
    link: "https://temp-file-share.web.app",
  },
  {
    image: darkerjupyter,
    title: "DarkerJupyter",
    description:
      "A browser extension that restyles Jupyter Notebooks to a darker theme.",
    teckStack: ["manifest.json", "css", "html"],
    link: "https://addons.mozilla.org/en-US/firefox/addon/darker-jupyter/",
  },
  {
    image: tinyurl,
    title: "tinyurl-rest-wrapper",
    description: "A RESTful API wrapper for TinyURL.",
    teckStack: ["flask", "html", "tailwindcss"],
    link: "https://tinyurl-rest-wrapper.onrender.com/",
  },
  {
    image: zippr,
    title: "zippr",
    description: "Releases archiving automation tool.",
    teckStack: ["nodejs", "archiver", "commander"],
    link: "https://www.npmjs.com/package/zippr",
  },
];

export default projects;
