// app.js

document.addEventListener('DOMContentLoaded', () => {
  // Função para carregar projetos da API
  const loadProjects = async () => {
      try {
          const response = await fetch('http://127.0.0.1:8000/api/projects/');
          const projects = await response.json();
          displayProjects(projects);
      } catch (error) {
          console.error('Erro ao carregar os projetos:', error);
      }
  };

  // Função para exibir os projetos no HTML
  const displayProjects = (projects) => {
      const projectsContainer = document.getElementById('projects');
      projectsContainer.innerHTML = ''; // Limpa o conteúdo atual

      // Itera sobre os projetos e cria os elementos para cada um
      projects.forEach((project) => {
          const projectCard = document.createElement('div');
          projectCard.classList.add('project-card');

          const projectTitle = document.createElement('h3');
          projectTitle.textContent = project.title;

          const projectDescription = document.createElement('p');
          projectDescription.textContent = project.description;

          const projectTechnologies = document.createElement('p');
          projectTechnologies.textContent = `Tecnologias: ${project.technologies}`;

          const projectLink = document.createElement('a');
          projectLink.href = project.url;
          projectLink.textContent = 'Ver mais';

          // Adiciona os elementos à div da card do projeto
          projectCard.appendChild(projectTitle);
          projectCard.appendChild(projectDescription);
          projectCard.appendChild(projectTechnologies);
          projectCard.appendChild(projectLink);

          // Adiciona a card do projeto ao container de projetos
          projectsContainer.appendChild(projectCard);
      });
  };

  // Carregar projetos ao carregar a página
  loadProjects();
});
