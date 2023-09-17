import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Hero />
      <div>
        <About />
        <br />
        <Experience />
        <br />
        <Projects />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default App;
