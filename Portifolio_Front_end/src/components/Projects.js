import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);  // Estado para armazenar os projetos
  const [loading, setLoading] = useState(true);   // Estado para indicar que os dados estão carregando

  // Função para buscar os projetos da API
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects/')
      .then(response => response.json())  // Converte a resposta para JSON
      .then(data => {
        setProjects(data);  // Armazena os projetos no estado
        setLoading(false);  // Define o loading como false depois de carregar os dados
      })
      .catch(error => {
        console.error('Erro ao carregar os projetos:', error);
        setLoading(false);  // Se houver erro, também define o loading como false
      });
  }, []);  // O array vazio indica que a função será chamada apenas uma vez quando o componente for montado

  if (loading) {
    return <div>Carregando projetos...</div>;  // Exibe "Carregando..." enquanto os dados não chegam
  }

  return (
    <section id="projects" className="projects container">
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
