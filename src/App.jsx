import About from "./components/About";
// import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import AnimatedCursor from "react-animated-cursor";
import { ScrollTop } from "./components/ScrollTop";

function App() {
  return (
    <div className="wrapper">
      <AnimatedCursor
        innerSize={9}
        outerSize={40}
        color="153,77,225"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.4}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Sidebar />
      <div className="content">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        {/* <Contact /> */}
        <ScrollTop />
      </div>
    </div>
  );
}

export default App;
