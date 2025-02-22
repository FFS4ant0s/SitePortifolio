import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams(); // Obtém o ID do projeto da URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Faz a chamada para a API e obtém os detalhes do projeto
    fetch(`http://127.0.0.1:8000/api/projects/${id}/`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.error('Erro ao carregar os detalhes do projeto:', error));
  }, [id]);

  if (!project) return <p>Carregando detalhes...</p>;

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {project.image && <img src={project.image} alt={project.title} />}
      {/* Outros detalhes do projeto */}
    </div>
  );
}

export default ProjectDetail;
