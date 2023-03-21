import './App.scss';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Home from './components/home/Home';
import NavBar from "./components/navbar/NavBar";
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <NavBar />
      
      <div className="pages">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>

      <Contact />
    </>
  );
}

export default App;
