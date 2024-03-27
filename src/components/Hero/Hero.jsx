import parser from "html-react-parser";
import Socials from "./Socials";
import hero from "../../content/hero";

const Hero = () => {
  return (
    <header className="md:fixed md:h-full md:py-12 mt-12 md:mt-0 gap-y-6 flex flex-col md:justify-between">
      <div>
        <p className="text-lg md:text-xl">Hello World! I'm</p>
        <h1 className="font-bold text-4xl md:text-5xl">
          Kent Leo
          <br />
          Makibulan
        </h1>
        <p className="text-lg md:text-xl mt-1">{hero?.title}</p>
        <p className="mt-4">{parser(hero?.description)}</p>
      </div>
      <Socials />
    </header>
  );
};

export default Hero;
