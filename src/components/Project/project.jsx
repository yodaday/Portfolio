import React from "react";
import "./project.css"; // We will create this CSS file for styling

function Project() {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A full-stack e-commerce website built with React and Node.js.",
      link: "https://github.com/yourusername/ecommerce-website",
    },
    {
      title: "Personal Portfolio",
      description: "A personal portfolio to showcase my projects and skills.",
      link: "https://github.com/yourusername/personal-portfolio",
    },
    {
      title: "Blog Platform",
      description: "A blog platform built with Java Spring Boot and React.",
      link: "https://github.com/yourusername/blog-platform",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
