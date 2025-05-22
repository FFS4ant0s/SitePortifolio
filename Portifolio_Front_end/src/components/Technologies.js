import React from 'react';
import FotoJava from '../assets/Javaimage.png';
import FotoPython from '../assets/imagespython.png';
import FotoJavaScript from '../assets/React.png';

function Technologies() {
  return (
    <section id="technologies" className="technologies">
      <h2>Nossas Principais Tecnologias</h2>
      <ul>
        <li>
          <img src={FotoJava} alt="Minha Foto" className="profile-photo" />
          Java (Spring) 
        </li>
        <li>
          <img src={FotoJavaScript} alt="Minha Foto" className="profile-photo" />
          JavaScript (React)</li>
        <li>
          <img src={FotoPython} alt="Minha Foto" className="profile-photo" />
          Python (Django)</li>
      </ul>
    </section>
  );
}

export default Technologies;
