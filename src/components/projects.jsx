import React, { useState, useRef } from "react";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Blood Friend App",
      category: "social",
      description: "A social service app for blood donation without sharing personal information.",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&h=400&fit=crop",
      color: "#ef4444",
      tech: ["React Native", "Node.js", "MongoDB"],
      status: "Live",
      features: ["Emergency Requests", "Donor Matching", "Real-time Notifications"]
    },
    {
      id: 2,
      title: "Django Projects",
      category: "backend",
      description: "Various Django-based projects for web development.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      color: "#092e20",
      tech: ["Django", "Python", "PostgreSQL"],
      status: "Development",
      features: ["REST APIs", "Admin Dashboards", "Authentication"]
    },
    {
      id: 3,
      title: "Food Order",
      category: "fullstack",
      description: "Food ordering platform with real-time tracking.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
      color: "#f59e0b",
      tech: ["React", "Node.js", "MongoDB"],
      status: "Completed",
      features: ["Online Ordering", "Payments", "Order Tracking"]
    },
    {
      id: 4,
      title: "Railway Ticket Booking",
      category: "fullstack",
      description: "Railway ticket booking system with seat selection.",
      image: "https://images.indianexpress.com/2025/08/Vande-Bharat-7.jpg?w=1200=cro",
      color: "#3b82f6",
      tech: ["JavaScript", "Express", "MySQL"],
      status: "Planning",
      features: ["Seat Selection", "Ticket Generation", "Payment Integration"]
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "frontend",
      description: "Personal portfolio website with glass morphism design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      color: "#007bff",
      tech: ["React", "CSS3", "Vite"],
      status: "Live",
      features: ["Responsive Design", "Dark Mode", "Interactive UI"]
    },
    {
      id: 6,
      title: "E-commerce Platform",
      category: "fullstack",
      description: "Full-featured e-commerce platform with cart and checkout.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      color: "#8b5cf6",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      status: "Development",
      features: ["Product Catalog", "Shopping Cart", "Order Management"]
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filter === "all" || project.category === filter;
    return matchesSearch && matchesFilter;
  });

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "social", label: "Social" },
    { id: "backend", label: "Backend" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full Stack" }
  ];

  // Fallback image if project image fails to load
  const getImageUrl = (image) => {
    return image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%234a7cf7' font-family='Arial' font-size='24'%3EProject Image%3C/text%3E%3C/svg%3E";
  };

  return (
    <section className="projects-section" ref={sectionRef}>
      <div className="projects-particles" />
      <div className="projects-glow-orb" />
      <div className="projects-glow-orb-2" />

      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">
            <span className="title-icon">◆</span>
            My Projects
          </h1>
          <div className="title-underline" />
          <p className="projects-subtitle">Building practical solutions for real problems</p>
        </div>

        <div className="projects-controls">
          <div className="search-wrapper">
            <span className="search-icon">⌕</span>
            <input
              className="search-input"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button className="search-clear" onClick={() => setSearchTerm("")}>
                ×
              </button>
            )}
          </div>

          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={`project-card ${activeProject === project.id ? 'hovered' : ''}`}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              style={{ '--project-color': project.color }}
            >
              <div className="project-card-inner">
                {/* Project Image */}
                <div className="project-image-wrapper">
                  <img 
                    src={getImageUrl(project.image)} 
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%234a7cf7' font-family='Arial' font-size='24'%3EProject Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="project-overlay">
                    <span className="project-status-badge" style={{ background: project.color }}>
                      <span className="status-dot" />
                      {project.status}
                    </span>
                    <span className="project-category-badge" style={{ background: `${project.color}33`, color: project.color }}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-pill">{t}</span>
                    ))}
                  </div>

                  <div className={`project-features ${activeProject === project.id ? 'expanded' : ''}`}>
                    <div className="features-content">
                      <span className="features-label">◆ Key Features</span>
                      {project.features.map((f, i) => (
                        <span key={i} className="feature-item">
                          <span className="feature-bullet">▶</span>
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="project-expand-btn" style={{ color: project.color }}>
                    <span className="expand-icon">{activeProject === project.id ? '▲' : '▼'}</span>
                    <span>{activeProject === project.id ? 'Show Less' : 'Show Features'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <span className="no-projects-icon">◆</span>
            <p>No projects found matching your search</p>
          </div>
        )}

        <div className="project-counter">
          <span className="counter-text">
            Showing {filteredProjects.length} of {projects.length} projects
          </span>
        </div>
      </div>

      <style>{`
        .projects-section {
          padding: 50px 20px;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          background: #0a0a0a;
        }

        .projects-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .projects-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .projects-particles::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(2px 2px at 20% 30%, rgba(0, 123, 255, 0.15), transparent),
            radial-gradient(2px 2px at 40% 70%, rgba(0, 123, 255, 0.1), transparent),
            radial-gradient(2px 2px at 60% 20%, rgba(0, 123, 255, 0.15), transparent),
            radial-gradient(2px 2px at 80% 80%, rgba(0, 123, 255, 0.1), transparent);
          background-size: 200px 200px;
          animation: floatParticles 20s linear infinite;
        }

        @keyframes floatParticles {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .projects-glow-orb {
          position: absolute;
          width: 500px;
          height: 500px;
          top: -150px;
          right: -150px;
          background: radial-gradient(circle, rgba(0, 123, 255, 0.05), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: orbFloat 20s infinite ease-in-out;
        }

        .projects-glow-orb-2 {
          position: absolute;
          width: 400px;
          height: 400px;
          bottom: -100px;
          left: -100px;
          background: radial-gradient(circle, rgba(0, 86, 179, 0.04), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: orbFloat 25s infinite ease-in-out reverse;
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 20px) scale(1.1); }
        }

        .projects-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .projects-title {
          font-size: 1.5rem;
          font-weight: 1000;
          background: linear-gradient(135deg, #007bff, #0056b3, #003d80);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-flex;
          align-items: center;
          gap: 30px;
          animation: gradientShift 3s ease infinite;
        }

        .title-icon {
          color: #007bff;
          font-size: 2rem;
          -webkit-text-fill-color: initial;
          color: #007bff;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .title-underline {
          display: block;
          width: 80px;
          height: 4px;
          margin: 8px auto 0;
          border-radius: 4px;
          background: linear-gradient(90deg, #007bff, #0056b3);
        }

        .projects-subtitle {
          color: #8899bb;
          font-size: 1.1rem;
          margin-top: 10px;
        }

        .projects-controls {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }

        .search-wrapper {
          flex: 1;
          min-width: 250px;
          max-width: 400px;
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #556688;
          font-size: 1.1rem;
        }

        .search-input {
          width: 100%;
          padding: 12px 40px 12px 40px;
          border-radius: 14px;
          border: 1px solid rgba(0, 123, 255, 0.08);
          background: rgba(10, 12, 25, 0.6);
          color: #e0e8f0;
          font-size: 0.95rem;
          transition: all 0.3s;
          outline: none;
          backdrop-filter: blur(10px);
        }

        .search-input:focus {
          border-color: rgba(0, 123, 255, 0.3);
          box-shadow: 0 0 30px rgba(0, 123, 255, 0.05);
        }

        .search-input::placeholder {
          color: #556688;
        }

        .search-clear {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: #556688;
          cursor: pointer;
          font-size: 1.2rem;
          transition: 0.3s;
        }

        .search-clear:hover {
          color: #e0e8f0;
        }

        .filter-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 18px;
          border-radius: 12px;
          border: 1px solid rgba(0, 123, 255, 0.06);
          background: rgba(10, 12, 25, 0.4);
          color: #8899bb;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0.85rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        .filter-btn:hover {
          background: rgba(0, 123, 255, 0.05);
          color: #e0e8f0;
          border-color: rgba(0, 123, 255, 0.15);
        }

        .filter-btn.active {
          background: rgba(0, 123, 255, 0.1);
          color: #e0e8f0;
          border-color: rgba(0, 123, 255, 0.2);
          box-shadow: 0 0 20px rgba(0, 123, 255, 0.05);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 25px;
          margin-bottom: 30px;
        }

        .project-card {
          background: rgba(10, 12, 25, 0.6);
          border-radius: 20px;
          border: 1px solid rgba(0, 123, 255, 0.06);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          backdrop-filter: blur(10px);
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 123, 255, 0.15);
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.3);
        }

        .project-card.hovered {
          border-color: var(--project-color);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4);
        }

        .project-card-inner {
          padding: 0;
        }

        .project-image-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          background: rgba(0, 123, 255, 0.03);
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.6));
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 15px;
        }

        .project-status-badge {
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .project-category-badge {
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: capitalize;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00ff88;
          display: inline-block;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .project-content {
          padding: 20px 22px 22px;
        }

        .project-title {
          color: #e0e8f0;
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 8px 0;
          letter-spacing: 0.3px;
        }

        .project-description {
          color: #8899bb;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0 0 12px 0;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }

        .tech-pill {
          padding: 4px 12px;
          border-radius: 50px;
          background: rgba(0, 123, 255, 0.06);
          color: #8899bb;
          font-size: 0.75rem;
          border: 1px solid rgba(0, 123, 255, 0.04);
          transition: all 0.3s;
        }

        .tech-pill:hover {
          background: rgba(0, 123, 255, 0.1);
          color: #e0e8f0;
          border-color: rgba(0, 123, 255, 0.1);
        }

        .project-features {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-features.expanded {
          max-height: 300px;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(0, 123, 255, 0.06);
        }

        .features-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .features-label {
          color: #556688;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #c8d6f0;
          font-size: 0.85rem;
        }

        .feature-bullet {
          color: #007bff;
          font-size: 0.6rem;
        }

        .project-expand-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          margin-top: 12px;
          border: 1px solid rgba(0, 123, 255, 0.06);
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0.8rem;
          font-weight: 500;
          width: 100%;
          justify-content: center;
          color: #8899bb;
        }

        .project-expand-btn:hover {
          background: rgba(0, 123, 255, 0.06);
          border-color: rgba(0, 123, 255, 0.1);
          color: #e0e8f0;
        }

        .expand-icon {
          font-size: 0.6rem;
          transition: transform 0.3s;
        }

        .no-projects {
          text-align: center;
          padding: 60px 20px;
          color: #556688;
        }

        .no-projects-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 10px;
          color: #007bff;
        }

        .project-counter {
          text-align: center;
          padding: 15px;
          color: #445566;
          font-size: 0.85rem;
          border-top: 1px solid rgba(0, 123, 255, 0.05);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .projects-title {
            font-size: 2.5rem;
          }

          .project-image-wrapper {
            height: 180px;
          }

          .projects-controls {
            flex-direction: column;
            align-items: stretch;
          }

          .search-wrapper {
            max-width: 100%;
          }

          .filter-buttons {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .projects-title {
            font-size: 2rem;
          }

          .project-image-wrapper {
            height: 160px;
          }

          .project-content {
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;