import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Hero from "./components/Hero.jsx";
import NavBar from "./components/NavBar.jsx";
import Projects from "./components/Projects.jsx";
import Technologies from "./components/Technologies.jsx";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
      <div className="fixed top-0 -z-10 h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-screen w-screen bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
