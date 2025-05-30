import React, { useState, useEffect } from 'react';
import githubImg from '../assets/Github.png';
import ecommerceImg from '../assets/E-commerce.png';
import cardapioImg from '../assets/Cardapio.png';
import blogImg from '../assets/Blog.png';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const imageMap = {
    GitHub: githubImg,
    "E-commerce": ecommerceImg,
    "Cardápio Digital": cardapioImg,
    Blog: blogImg
  };

  useEffect(() => {
    fetch('https://siteportifolio-kn9k.onrender.com/api/projects/')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao carregar os projetos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div> Carregando projetos...
      </div>
    );
  }

  return (
    <section id="projects" className="projects container">
      <h2 className="neon-title">Projetos</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              {/* Aqui você pode usar a URL diretamente, já que está retornando a URL completa */}
              <img
                src={imageMap[project.title]}
                alt={project.title}
              />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn">
                Ver Projeto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
