import React from 'react';
import minhaFoto from '../assets/foto_minha.png';

function About() {
  return (
    <section id="about" className="hero">
      <img src={minhaFoto} alt="Minha Foto" className="profile-photo" />
      <div className="hero-content">
        <h2>Sobre Mim</h2>
        <p>Sou um programador fullstack com experiência em
          desenvolvimento de soluções web. Meu foco abrange tanto o
          front-end quanto o back-end. Tenho habilidades em arquitetura
          de software, integração de APIs e otimização de desempenho.
          Estou sempre em busca de novos desafios e oportunidades.</p>
      </div>
    </section>
  );
}

export default About;
