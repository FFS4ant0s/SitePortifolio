import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the projects!", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <div className="projects">
        {projects.map(project => (
          <div key={project.id} className="project">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
            {project.image && <img src={project.image} alt={project.title} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
