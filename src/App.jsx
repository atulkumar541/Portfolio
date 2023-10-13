import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="content">
        <About />
        <Skills />
        <Experience />
        <Education />
        {/* <Projects /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
