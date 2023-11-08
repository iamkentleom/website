import About from "./components/About/About";
import Connect from "./components/Connect/Connect";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Hero />
      <div className="hidden md:block"></div>
      <main id="content" className="grid grid-cols-1 gap-16 my-12">
        <About />
        <Experience />
        <Projects />
        <Connect />
        <Footer />
      </main>
    </>
  );
}

export default App;
