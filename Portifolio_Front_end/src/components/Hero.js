import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src="/assets/foto_minha.png" alt="Minha Foto" className="profile-photo" />
        <div className="hero-text">
          <h2>FERNANDO FERNANDES</h2>
          <h3>DESENVOLVEDOR FULLSTACK</h3>
          <p>Sou um programador fullstack...</p>
          <a href="#projects" className="btn">Ver Projetos</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
