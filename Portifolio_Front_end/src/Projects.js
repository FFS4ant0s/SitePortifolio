import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

  // Função para buscar os projetos da API
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects/')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Erro ao buscar projetos:', error));
  }, []);

  return (
    <section id="projects" className="projects container">
      {projects.length > 0 ? (
        projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
          </div>
        ))
      ) : (
        <p>Carregando projetos...</p>
      )}
    </section>
  );
}

export default Projects;