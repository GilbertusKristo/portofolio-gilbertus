import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalCodeBackground from "./components/GlobalCodeBackground";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <GlobalCodeBackground />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Projects />
          <TechStack />
          <Experience />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;