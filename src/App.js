// import logo from './logo.svg';
import './App.css';
import SideIndex from './components/SideIndex';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import WorkExp from './components/WorkExp';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
function App() {
  return (
    <>
      <h1>Shubham Tandon</h1>
      <p>I’m a <b>software engineer</b> based out of Ambala, Haryana.</p>
      <SideIndex />
      <AboutMe />
      <Contact />
      <WorkExp />
      <Projects />
      <Education />
      <Skills />
    </>
  );
}

export default App;
