import { TypeAnimation } from "react-type-animation";

const Connect = () => {
  return (
    <section
      id="connect"
      className="flex justify-between items-center my-8"
      aria-label="Connect with Me"
    >
      <div>
        <p>Let's work together and</p>
        <p>
          turn your <strong>ideas</strong> into{" "}
          <TypeAnimation
            sequence={[
              "functional applications",
              3000,
              "seamless experiences",
              3000,
              "innovative solutions",
              3000,
              "digital masterpieces",
              3000,
            ]}
            preRenderFirstString={true}
            wrapper="strong"
            cursor={false}
            repeat={Infinity}
          />
          .
        </p>
      </div>
      <a
        href="mailto:leomakibulan@gmail.com?subject=Work%20Inquiry"
        className="px-5 py-3 rounded-lg bg-gray-950 hover:bg-gray-800 text-white min-w-fit"
      >
        Hire Me!
      </a>
    </section>
  );
};

export default Connect;
