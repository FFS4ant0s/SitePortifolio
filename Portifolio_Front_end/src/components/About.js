import React from 'react';
import minhaFoto from '../assets/foto_minha.png';

function About() {
  return (
    <section id="about" class='hero'>
      <img src={minhaFoto} alt="Minha Foto" />
      <h2>Sobre Mim</h2>
      <p>Sou Fernando, um desenvolvedor fullstack apaixonado por tecnologia...</p>
    </section>
  );
}

export default About;
