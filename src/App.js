import './App.css';
import AboutMe from './Components/AboutMeComponent/AboutMe';
import Contact from './Components/ContactComponent/Contact';
import Home from './Components/HomePageComponent/Home';
import Project from './Components/ProjectComponent/Project';
import Skills from './Components/SkillsComponent/Skills';
function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
