import React from "react";
import parser from "html-react-parser";
import about from "../../content/about";

const About = () => {
  return (
    <section id="about" aria-label="About Me">
      <h2 className="text-sm font-bold sticky py-4 top-0 bg-white md:hidden">
        ABOUT
      </h2>
      {about.map((content, i) => (
        <React.Fragment key={i}>
          <p>{parser(content)}</p>
          {i + 1 !== about.length && <br />}
        </React.Fragment>
      ))}
    </section>
  );
};

export default About;
