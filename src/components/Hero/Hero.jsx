import Socials from "./Socials";

const Hero = () => {
  return (
    <div className="fixed h-full py-12 flex flex-col justify-between">
      <div>
        <p className="text-xl">Hello World! I'm</p>
        <h1 className="font-bold text-5xl">
          Kent Leo
          <br />
          Makibulan
        </h1>
        <p className="text-xl">Software Engineer, Cebu PH</p>
        <br />
        <p>Passionate on developing software that people love using.</p>
      </div>
      <Socials />
    </div>
  );
};

export default Hero;
