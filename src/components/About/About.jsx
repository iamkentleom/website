import React from "react";
import parser from "html-react-parser";
import about from "../../content/about";

const About = () => {
  return (
    <div>
      {about.map((content, i) => (
        <React.Fragment key={i}>
          <p>{parser(content)}</p>
          {i + 1 !== about.length && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default About;
