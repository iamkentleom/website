import Socials from "./Socials";

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
        <p className="text-lg md:text-xl">Software Engineer, Cebu PH</p>
        <p className="mt-4">
          Passionate on developing software
          <br /> that people love using.
        </p>
      </div>
      <Socials />
    </header>
  );
};

export default Hero;
