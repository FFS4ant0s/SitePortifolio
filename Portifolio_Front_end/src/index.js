import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// Componente para exibir os projetos
const ProjectList = () => {
  const [projects, setProjects] = useState([]); // Estado para armazenar os projetos

  // Fazendo a requisição para a API
  useEffect(() => {
    fetch('https://sua-api.com/projetos') // Substitua pela URL da sua API
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((data) => setProjects(data)) // Atualiza o estado com os dados
      .catch((error) => console.error('Erro ao buscar os projetos:', error)); // Trata erros
  }, []); // O array vazio garante que a requisição será feita apenas uma vez

  return (
    <div className="projects">
      {/* Itera sobre os projetos e exibe um card para cada um */}
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

// Renderiza o componente no ponto de montagem da página
ReactDOM.render(<ProjectList />, document.getElementById('project-list'));
