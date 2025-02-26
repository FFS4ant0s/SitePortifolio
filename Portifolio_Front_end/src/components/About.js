import React from 'react';
import minhaFoto from '../assets/foto_minha.png';

function About() {
  return (
    <section id="about" className="hero">
      <img src={minhaFoto} alt="Minha Foto" className="profile-photo" />
      <div className="hero-content">
        <h2>Sobre Mim</h2>
        <p>Sou Fernando, um desenvolvedor fullstack apaixonado por tecnologia...</p>
      </div>
    </section>
  );
}

export default About;
