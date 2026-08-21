

// function Projects(){
//   return(
//     <>
//     <h3>BLOOD FRIEND APP </h3>
//     <p>its social service app based on the blood donation without giving any personal information </p>


//     <h1>this is my django projects</h1>

//     <h3>food order </h3>

//     <p>railway ticket booking</p>
    
//     </>
//   )
// }
// export default Projects;

import { useState,useEffect,useRef } from "react";



function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse move effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  // Project data
  const projects = [
    {
      id: 1,
      title: "BLOOD FRIEND APP",
      category: "social",
      description: "its social service app based on the blood donation without giving any personal information",
      icon: "",
      color: "#ef4444",
      tech: ["React Native", "Node.js", "MongoDB"],
      status: "Live",
      features: ["Emergency Blood Request", "Donor Matching", "Privacy Protected"]
    },
    {
      id: 2,
      title: "Django Projects",
      category: "backend",
      description: "this is my django projects",
      icon: "",
      color: "#092e20",
      tech: ["Django", "Python", "PostgreSQL"],
      status: "Development",
      features: ["User Authentication", "REST API", "Admin Dashboard"]
    },
    {
      id: 3,
      title: "Food Order",
      category: "fullstack",
      description: "food order",
      icon: "",
      color: "#f59e0b",
      tech: ["React", "Node.js", "MongoDB"],
      status: "Completed",
      features: ["Online Ordering", "Payment Gateway", "Real-time Tracking"]
    },
    {
      id: 4,
      title: "Railway Ticket Booking",
      category: "fullstack",
      description: "railway ticket booking",
      icon: "",
      color: "#3b82f6",
      tech: ["JavaScript", "Express", "MySQL"],
      status: "Planning",
      features: ["Seat Selection", "Ticket Generation", "Cancellation"]
    }
  ];

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || project.category === filter;
    return matchesSearch && matchesFilter;
  });

  // Categories for filter
  const categories = [
    { id: "all", label: "All Projects", icon: "" },
    { id: "social", label: "Social", icon: "" },
    { id: "backend", label: "Backend", icon: "" },
    { id: "fullstack", label: "Full Stack", icon: "" }
  ];

  return (
    <section 
      className={`projects-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      {/* Animated background particles */}
      <div className="projects-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Glowing orbs */}
      <div className="projects-glow-orb"></div>
      <div className="projects-glow-orb-2"></div>

      {/* Dynamic gradient overlay */}
      <div 
        className="projects-gradient-overlay"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(74, 124, 247, 0.06), transparent 60%)`
        }}
      />

      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <span className="header-emoji"></span>
          <h1 className="projects-title">
            My Projects
            <span className="title-underline"></span>
          </h1>
          <p className="projects-subtitle">
            <span className="subtitle-icon"></span>
            Building innovative solutions for real-world problems
          </p>
        </div>

        {/* Search and Filter */}
        <div className="projects-controls">
          <div className="search-wrapper">
            <span className="search-icon"></span>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="search-clear"
                onClick={() => setSearchTerm("")}
              >
                
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
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              style={{ '--project-color': project.color }}
            >
              <div className="project-card-inner">
                {/* Card Glow */}
                <div className="card-glow"></div>
                
                {/* Project Icon */}
                <div className="project-icon" style={{ background: `${project.color}15` }}>
                  <span className="icon-emoji">{project.icon}</span>
                  <span className="icon-ring"></span>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Status Badge */}
                  <div className="project-status">
                    <span className={`status-badge ${project.status.toLowerCase()}`}>
                      <span className="status-dot"></span>
                      {project.status}
                    </span>
                  </div>

                  {/* Features (shown on expand) */}
                  <div className={`project-features ${activeProject === project.id ? 'expanded' : ''}`}>
                    <div className="features-content">
                      <span className="features-label"> Key Features</span>
                      {project.features.map((feature, index) => (
                        <span key={index} className="feature-item">
                          <span className="feature-bullet">•</span>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand/Collapse hint */}
                  <div className="project-expand-hint">
                    <span className="hint-text">
                      {activeProject === project.id ? 'Click to collapse' : 'Click to expand'}
                    </span>
                    <span className={`expand-arrow ${activeProject === project.id ? 'rotated' : ''}`}>
                      ▶
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <span className="no-projects-icon"></span>
            <p>No projects found matching your search</p>
            <button 
              className="clear-search-btn"
              onClick={() => {
                setSearchTerm("");
                setFilter("all");
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Project Counter */}
        <div className="project-counter">
          <span className="counter-icon"></span>
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
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .projects-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Particles */
        .projects-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(74, 124, 247, 0.1);
          border-radius: 50%;
          animation: floatParticle 20s infinite linear;
        }

        .particle:nth-child(1) { left: 10%; top: 20%; animation-delay: 0s; }
        .particle:nth-child(2) { left: 30%; top: 70%; animation-delay: 2s; width: 6px; height: 6px; }
        .particle:nth-child(3) { left: 50%; top: 30%; animation-delay: 4s; }
        .particle:nth-child(4) { left: 70%; top: 80%; animation-delay: 1s; width: 5px; height: 5px; }
        .particle:nth-child(5) { left: 85%; top: 40%; animation-delay: 3s; }
        .particle:nth-child(6) { left: 95%; top: 60%; animation-delay: 5s; width: 6px; height: 6px; }

        @keyframes floatParticle {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }

        .projects-glow-orb {
          position: absolute;
          width: 300px;
          height: 300px;
          top: -50px;
          right: -50px;
          background: radial-gradient(circle, rgba(74, 124, 247, 0.06), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: orbFloat 20s infinite ease-in-out;
        }

        .projects-glow-orb-2 {
          position: absolute;
          width: 200px;
          height: 200px;
          bottom: -50px;
          left: -50px;
          background: radial-gradient(circle, rgba(138, 180, 248, 0.04), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: orbFloat 25s infinite ease-in-out reverse;
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 20px) scale(1.1); }
          66% { transform: translate(20px, -30px) scale(0.9); }
        }

        .projects-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          transition: 0.3s;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .header-emoji {
          font-size: 3rem;
          display: block;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .projects-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 10px 0;
          background: linear-gradient(135deg, #4a7cf7, #8ab4f8, #4a7cf7);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 3s ease infinite;
          display: inline-block;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .title-underline {
          display: block;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #4a7cf7, #8ab4f8);
          margin: 8px auto 0;
          border-radius: 4px;
          animation: underlinePulse 2s infinite;
        }

        @keyframes underlinePulse {
          0%, 100% { width: 80px; }
          50% { width: 120px; }
        }

        .projects-subtitle {
          color: #8899bb;
          font-size: 1.1rem;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .subtitle-icon {
          font-size: 1.2rem;
        }

        /* Controls */
        .projects-controls {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .search-wrapper {
          flex: 1;
          min-width: 200px;
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #4a7cf7;
        }

        .search-input {
          width: 100%;
          padding: 12px 45px 12px 45px;
          border-radius: 14px;
          border: 2px solid rgba(74, 124, 247, 0.08);
          background: rgba(10, 12, 25, 0.6);
          color: #e0e8f0;
          font-size: 1rem;
          transition: all 0.3s;
          outline: none;
        }

        .search-input:focus {
          border-color: #4a7cf7;
          box-shadow: 0 0 30px rgba(74, 124, 247, 0.05);
        }

        .search-clear {
          position: absolute;
          right: 15px;
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
          color: #fff;
          transform: translateY(-50%) rotate(90deg);
        }

        .filter-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 18px;
          border-radius: 12px;
          border: 2px solid rgba(74, 124, 247, 0.06);
          background: rgba(10, 12, 25, 0.4);
          color: #8899bb;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .filter-btn:hover {
          background: rgba(74, 124, 247, 0.05);
          border-color: rgba(74, 124, 247, 0.15);
        }

        .filter-btn.active {
          background: rgba(74, 124, 247, 0.1);
          border-color: #4a7cf7;
          color: #e0e8f0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px;
          margin-bottom: 30px;
        }

        .project-card {
          background: rgba(10, 12, 25, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid rgba(74, 124, 247, 0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          overflow: hidden;
          position: relative;
          animation: cardSlide 0.6s ease forwards;
          opacity: 0;
        }

        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
        .project-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes cardSlide {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(74, 124, 247, 0.15);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .project-card.hovered {
          transform: translateY(-8px) scale(1.02);
          border-color: var(--project-color);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4);
        }

        .project-card-inner {
          padding: 25px;
          position: relative;
        }

        .card-glow {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, var(--project-color), transparent 70%);
          opacity: 0;
          transition: 0.4s;
          pointer-events: none;
        }

        .project-card.hovered .card-glow {
          opacity: 0.05;
        }

        .project-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: 15px;
          position: relative;
          transition: 0.3s;
        }

        .project-card.hovered .project-icon {
          transform: scale(1.1) rotate(-5deg);
        }

        .icon-emoji {
          position: relative;
          z-index: 2;
        }

        .icon-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          border: 2px solid var(--project-color);
          opacity: 0.2;
          animation: ringPulse 2s infinite;
        }

        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.1; }
        }

        .project-title {
          color: #e0e8f0;
          font-size: 1.2rem;
          margin: 0 0 8px 0;
          font-weight: 600;
        }

        .project-description {
          color: #8899bb;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0 0 15px 0;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 15px;
        }

        .tech-pill {
          padding: 4px 12px;
          background: rgba(74, 124, 247, 0.06);
          border: 1px solid rgba(74, 124, 247, 0.06);
          border-radius: 50px;
          font-size: 0.75rem;
          color: #8899bb;
        }

        .project-status {
          margin-bottom: 12px;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 14px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .status-badge.live {
          background: rgba(74, 222, 128, 0.06);
          border: 1px solid rgba(74, 222, 128, 0.15);
          color: #4ade80;
        }

        .status-badge.development {
          background: rgba(251, 191, 36, 0.06);
          border: 1px solid rgba(251, 191, 36, 0.15);
          color: #fbbf24;
        }

        .status-badge.completed {
          background: rgba(74, 124, 247, 0.06);
          border: 1px solid rgba(74, 124, 247, 0.15);
          color: #60a5fa;
        }

        .status-badge.planning {
          background: rgba(248, 113, 113, 0.06);
          border: 1px solid rgba(248, 113, 113, 0.15);
          color: #f87171;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .project-features {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-features.expanded {
          max-height: 300px;
        }

        .features-content {
          padding-top: 15px;
          border-top: 1px solid rgba(74, 124, 247, 0.05);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .features-label {
          font-size: 0.75rem;
          color: #556688;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .feature-item {
          font-size: 0.85rem;
          color: #c8d6f0;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: featureSlide 0.3s ease forwards;
          opacity: 0;
        }

        .project-features.expanded .feature-item {
          opacity: 1;
        }

        .feature-item:nth-child(2) { animation-delay: 0.05s; }
        .feature-item:nth-child(3) { animation-delay: 0.1s; }
        .feature-item:nth-child(4) { animation-delay: 0.15s; }

        @keyframes featureSlide {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .feature-bullet {
          color: var(--project-color);
        }

        .project-expand-hint {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(74, 124, 247, 0.03);
        }

        .hint-text {
          font-size: 0.7rem;
          color: #445566;
          transition: 0.3s;
        }

        .project-card:hover .hint-text {
          color: #556688;
        }

        .expand-arrow {
          font-size: 0.6rem;
          color: #556688;
          transition: 0.3s;
        }

        .expand-arrow.rotated {
          transform: rotate(90deg);
        }

        .no-projects {
          text-align: center;
          padding: 60px 20px;
          background: rgba(10, 12, 25, 0.4);
          border-radius: 20px;
          border: 1px solid rgba(74, 124, 247, 0.05);
        }

        .no-projects-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 10px;
        }

        .no-projects p {
          color: #556688;
          margin-bottom: 15px;
        }

        .clear-search-btn {
          padding: 10px 24px;
          border-radius: 12px;
          border: 1px solid rgba(74, 124, 247, 0.15);
          background: rgba(10, 12, 25, 0.6);
          color: #8899bb;
          cursor: pointer;
          transition: 0.3s;
        }

        .clear-search-btn:hover {
          background: rgba(74, 124, 247, 0.05);
          border-color: rgba(74, 124, 247, 0.3);
        }

        .project-counter {
          text-align: center;
          padding: 15px;
          color: #445566;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .counter-icon {
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .projects-title {
            font-size: 2.2rem;
          }

          .projects-controls {
            flex-direction: column;
          }

          .filter-buttons {
            justify-content: center;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-card-inner {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .projects-title {
            font-size: 1.8rem;
          }

          .filter-btn {
            font-size: 0.75rem;
            padding: 6px 12px;
          }

          .project-icon {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;