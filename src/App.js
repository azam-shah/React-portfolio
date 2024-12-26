import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="bg-gradient-to-r from-black to-blue-950">
      <Navbar />

      {/* Add ID attributes for proper scrolling */}
      <section id="Home">
        <Home />
      </section>

      <section id="About">
        <About />
      </section>

      <section id="Skill">
        <Skills />
      </section>

      <section id="Projects">
        <Projects />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
