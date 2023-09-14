import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Hero />
      <div>
        <About />
        <br />
        <Experience />
      </div>
    </>
  );
}

export default App;
