import React from 'react';
import './Project.css';

const Projects = ({ darkMode }) => {
  const projects = [
    { title: "Golden Mar", img: "/GoldenMar.png", desc: "Premium Beach Experience", link: "https://chaymaerachida2000-cpu.github.io/FINAL-PROJET/" },
    { title: "Film Finder", img: "/Films.png", desc: "Movie Discovery & Search", link: "https://chaymaerachida2000-cpu.github.io/FILMSAPP2/" },
    { title: "Ticketo", img: "/Autobus.png", desc: "Seamless Travel Booking", link: "https://resonant-dasik-a484f3.netlify.app/" },
    { title: "Weather Tracker", img: "/Weater.png", desc: "Real-time City Updates", link: "https://chaymaerachida2000-cpu.github.io/weater/" },
    { title: "Home of Style", img: "/Meakup.png", desc: "Beauty & Elegance Store", link: "https://chaymaerachida2000-cpu.github.io/cloning-project-n1/" },
    { title: "Healty tracker", img: "/Health.png", desc: "healty app", link: "https://chaymaerachida2000-cpu.github.io/healtyapp/" },
  ];

  return (
    <section className={`projects-section ${darkMode ? 'dark' : ''}`}>
      <h2 className="section-title">My Projects Showcase</h2>
      
      <p className="projects-note">
        These are just a few selected highlights from my portfolio, showcasing the evolution 
        of my skills from early learning projects to advanced, complex applications.
      </p>
      
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="image-link">
              <div className="image-container">
                <img src={p.img} alt={p.title} />
              </div>
            </a>
            <div className="card-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-view">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;