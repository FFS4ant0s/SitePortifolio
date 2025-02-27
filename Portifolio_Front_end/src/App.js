import React from 'react';
import Projects from './components/Projects';  // Importe o componente Projects
import './styles/styles.css';  // Importe o CSS, caso necessário
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Technologies from './components/Technologies';

const App = () => {
  return (
    <div>
      <header className="header">
        <h1>Meu portfólio</h1>
        <nav className="navbar">
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#technologies">Tecnologias</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>

      <About />

      <Projects />

      <Technologies />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
