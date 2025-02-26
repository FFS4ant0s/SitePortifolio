import React from 'react';
import Projects from './components/Projects';  // Importe o componente Projects
import './styles/styles.css';  // Importe o CSS, caso necessário
import About from './components/About';

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

      {/* Aqui você chama o componente Projects */}
      <Projects />

      {/* Outras seções do seu portfólio */}
      <section id="technologies" className="technologies container">
        <h2>Tecnologias</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Fernando Fernandes. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
