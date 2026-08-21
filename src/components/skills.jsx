
import { useState } from "react";



function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [skillLevels, setSkillLevels] = useState({});

  // Skill categories with icons and colors
  const skillCategories = {
    "PROGRAMMING LANGUAGES": {
      icon: "",
      color: "#4a7cf7",
      skills: ["Python", "JavaScript (ES6+)", "MySQL"]
    },
    "FRONTEND DEVELOPMENT": {
      icon: "",
      color: "#6849f2",
      skills: ["HTML", "CSS", "REACT.JS"]
    },
    "BACKEND DEVELOPMENT": {
      icon: "",
      color: "#3c42f0",
      skills: ["Node.js", "Django"]
    },
    "MACHINE LEARNING": {
      icon: "",
      color: "#2f22e2",
      skills: [
        "Basics of Machine Learning",
        "Data Preprocessing",
        "Supervised Learning Fundamentals",
        "Model Evaluation (Basic Concepts)"
      ]
    },
    "TOOLS & TECHNOLOGIES": {
      icon: "",
      color: "#551cd7",
      skills: [
        "Git & GitHub",
        "Visual Studio Code",
        "npm",
        "REST APIs",
        "JSON"
      ]
    },
    "SOFT SKILLS": {
      icon: "",
      color: "#3431ea",
      skills: [
        "Problem Solving",
        "Quick Learner",
        "Team Collaboration",
        "Communication Skills",
        "Time Management",
        "Adaptability",
        "Continuous Learning"
      ]
    }
  };

  // Toggle category expansion
  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  // Get skill level (random for demo, you can customize)
  const getSkillLevel = (skill) => {
    const levels = {
      "Python": 85,
      "JavaScript (ES6+)": 80,
      "MySQL": 75,
      "HTML": 90,
      "CSS": 85,
      "REACT.JS": 78,
      "Node.js": 70,
      "Django": 65,
      "Basics of Machine Learning": 60,
      "Data Preprocessing": 55,
      "Supervised Learning Fundamentals": 50,
      "Model Evaluation (Basic Concepts)": 45,
      "Git & GitHub": 80,
      "Visual Studio Code": 85,
      "npm": 75,
      "REST APIs": 70,
      "JSON": 80,
      "Problem Solving": 85,
      "Quick Learner": 90,
      "Team Collaboration": 80,
      "Communication Skills": 85,
      "Time Management": 75,
      "Adaptability": 85,
      "Continuous Learning": 90
    };
    return levels[skill] || 70;
  };

  // Filter skills based on search
  const filterSkills = (skills) => {
    if (!searchTerm) return skills;
    return skills.filter(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Calculate total skills count
  const totalSkills = Object.values(skillCategories).reduce(
    (acc, cat) => acc + cat.skills.length, 0
  );

  return (
    <>
      <div className="skills-container">
        {/* Header with animation */}
        <div className="skills-header">
          <h1 className="skills-title">
            <span className="title-icon"></span>
            MY SKILLS
            <span className="title-badge">{totalSkills}+</span>
          </h1>
          <p className="skills-subtitle">
            <span className="subtitle-emoji"></span>
            Technologies & tools I work with
          </p>
          
          {/* Search bar */}
          <div className="skills-search">
            <span className="search-icon"></span>
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="search-clear"
                onClick={() => setSearchTerm("")}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Stats counter */}
        <div className="skills-stats">
          <div className="stat-item">
            <span className="stat-number">{Object.keys(skillCategories).length}</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{totalSkills}</span>
            <span className="stat-label">Skills</span>
          </div>
          <div className="stat-item">
            <span className="stat-number"></span>
            <span className="stat-label">Proficient</span>
          </div>
        </div>

        {/* Skills grid */}
        <div className="skills-grid">
          {Object.entries(skillCategories).map(([category, data]) => {
            const filteredSkills = filterSkills(data.skills);
            const isActive = activeCategory === category;
            const isHighlighted = searchTerm && filteredSkills.length > 0;

            if (filteredSkills.length === 0 && searchTerm) return null;

            return (
              <div 
                key={category}
                className={`skill-category ${isActive ? 'active' : ''} ${isHighlighted ? 'highlighted' : ''}`}
                style={{ borderColor: data.color }}
                onClick={() => toggleCategory(category)}
              >
                <div className="category-header" style={{ background: `${data.color}15` }}>
                  <div className="category-icon" style={{ color: data.color }}>
                    {data.icon}
                  </div>
                  <h2 className="category-title" style={{ color: data.color }}>
                    {category}
                  </h2>
                  <span className="category-count" style={{ background: data.color }}>
                    {data.skills.length}
                  </span>
                  <span className={`category-arrow ${isActive ? 'rotated' : ''}`}>
                    ▶
                  </span>
                </div>

                <ul className={`skills-list ${isActive ? 'expanded' : ''}`}>
                  {data.skills.map((skill, index) => {
                    const level = getSkillLevel(skill);
                    const isHovered = hoveredSkill === skill;
                    
                    if (searchTerm && !skill.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return null;
                    }

                    return (
                      <li 
                        key={index}
                        className={`skill-item ${isHovered ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{ 
                          animationDelay: `${index * 50}ms`,
                          borderColor: isHovered ? data.color : 'transparent'
                        }}
                      >
                        <div className="skill-content">
                          <span className="skill-bullet" style={{ color: data.color }}>
                            {isHovered ? '▶' : '•'}
                          </span>
                          <span className="skill-name">{skill}</span>
                          <span className="skill-level" style={{ color: data.color }}>
                            {level}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-bar-fill"
                            style={{ 
                              width: `${level}%`,
                              background: `linear-gradient(90deg, ${data.color}44, ${data.color})`
                            }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* No results message */}
        {searchTerm && Object.values(skillCategories).every(cat => 
          filterSkills(cat.skills).length === 0
        ) && (
          <div className="no-results">
            <span className="no-results-icon"></span>
            <p>No skills found matching "{searchTerm}"</p>
          </div>
        )}

        {/* Quick filters */}
        <div className="quick-filters">
          <span className="quick-filters-label">Quick filters:</span>
          {Object.entries(skillCategories).map(([category, data]) => (
            <button
              key={category}
              className={`quick-filter-btn ${activeCategory === category ? 'active' : ''}`}
              style={{ 
                borderColor: activeCategory === category ? data.color : 'transparent',
                background: activeCategory === category ? `${data.color}20` : 'transparent'
              }}
              onClick={() => toggleCategory(category)}
            >
              {data.icon} {category.split(' ')[0]}
            </button>
          ))}
          {activeCategory && (
            <button 
              className="quick-filter-btn clear-btn"
              onClick={() => setActiveCategory(null)}
            >
              ✕ Clear
            </button>
          )}
        </div>

        {/* Footer note */}
        <div className="skills-footer">
          <span>💡 Click on categories to expand • Hover skills for details</span>
        </div>
      </div>

      <style>{`
        .skills-container {
          padding: 20px;
          color: #e0e8f0;
          max-width: 1200px;
          margin: 0 auto;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 30px;
          animation: slideDown 0.6s ease;
        }

        .skills-title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #4a7cf7, #8ab4f8, #4a7cf7);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 3s ease infinite;
          display: inline-flex;
          align-items: center;
          gap: 15px;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .title-icon {
          font-size: 2rem;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .title-badge {
          background: linear-gradient(135deg, #4a7cf7, #8ab4f8);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          color: #fff;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .skills-subtitle {
          color: #8899bb;
          font-size: 1.1rem;
          margin-top: 10px;
        }

        .subtitle-emoji {
          margin-right: 8px;
        }

        .skills-search {
          max-width: 400px;
          margin: 20px auto 0;
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
          border-radius: 30px;
          border: 2px solid rgba(74, 124, 247, 0.2);
          background: rgba(10, 12, 25, 0.6);
          color: #e0e8f0;
          font-size: 1rem;
          transition: all 0.3s;
          outline: none;
        }

        .search-input:focus {
          border-color: #4a7cf7;
          box-shadow: 0 0 30px rgba(74, 124, 247, 0.1);
        }

        .search-input::placeholder {
          color: #556688;
        }

        .search-clear {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: #8899bb;
          cursor: pointer;
          font-size: 1.2rem;
          transition: 0.3s;
        }

        .search-clear:hover {
          color: #fff;
          transform: translateY(-50%) rotate(90deg);
        }

        .skills-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 30px;
          padding: 20px;
          background: rgba(10, 12, 25, 0.4);
          border-radius: 15px;
          border: 1px solid rgba(74, 124, 247, 0.05);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #4a7cf7, #8ab4f8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #556688;
          margin-top: 4px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .skill-category {
          background: rgba(10, 12, 25, 0.6);
          border-radius: 15px;
          border: 2px solid rgba(74, 124, 247, 0.1);
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .skill-category:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .skill-category.active {
          border-color: #4a7cf7;
          box-shadow: 0 10px 40px rgba(74, 124, 247, 0.1);
        }

        .skill-category.highlighted {
          animation: glowPulse 1s ease;
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(74, 124, 247, 0.1); }
          50% { box-shadow: 0 0 40px rgba(74, 124, 247, 0.3); }
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px 20px;
          transition: 0.3s;
        }

        .category-icon {
          font-size: 1.8rem;
          width: 40px;
          text-align: center;
        }

        .category-title {
          flex: 1;
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
          letter-spacing: 1px;
        }

        .category-count {
          padding: 2px 10px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 700;
          color: #fff;
        }

        .category-arrow {
          transition: transform 0.3s;
          color: #556688;
          font-size: 0.8rem;
        }

        .category-arrow.rotated {
          transform: rotate(90deg);
        }

        .skills-list {
          max-height: 0;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0 20px;
          list-style: none;
        }

        .skills-list.expanded {
          max-height: 800px;
          padding: 0 20px 20px;
        }

        .skill-item {
          padding: 10px 0;
          border-bottom: 1px solid rgba(74, 124, 247, 0.05);
          transition: all 0.3s;
          animation: slideIn 0.3s ease forwards;
          opacity: 0;
          transform: translateX(-10px);
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .skill-item:last-child {
          border-bottom: none;
        }

        .skill-item.hovered {
          transform: translateX(5px) scale(1.02);
          background: rgba(74, 124, 247, 0.05);
          border-radius: 8px;
          padding: 10px 15px;
        }

        .skill-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .skill-bullet {
          font-size: 0.8rem;
          transition: 0.3s;
        }

        .skill-name {
          flex: 1;
          font-size: 0.95rem;
          color: #c8d6f0;
        }

        .skill-level {
          font-size: 0.75rem;
          font-weight: 600;
          opacity: 0.7;
        }

        .skill-bar {
          width: 100%;
          height: 3px;
          background: rgba(74, 124, 247, 0.1);
          border-radius: 3px;
          margin-top: 6px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .no-results {
          text-align: center;
          padding: 40px;
          color: #556688;
        }

        .no-results-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 10px;
        }

        .quick-filters {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          padding: 20px;
          background: rgba(10, 12, 25, 0.4);
          border-radius: 15px;
          margin-bottom: 20px;
          justify-content: center;
        }

        .quick-filters-label {
          color: #556688;
          font-size: 0.85rem;
          margin-right: 10px;
        }

        .quick-filter-btn {
          padding: 6px 16px;
          border-radius: 20px;
          border: 2px solid transparent;
          background: transparent;
          color: #8899bb;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0.85rem;
        }

        .quick-filter-btn:hover {
          transform: translateY(-2px);
          background: rgba(74, 124, 247, 0.1);
        }

        .quick-filter-btn.active {
          color: #e0e8f0;
          border-color: #4a7cf7;
        }

        .clear-btn {
          color: #f87171;
        }

        .clear-btn:hover {
          background: rgba(248, 113, 113, 0.1);
        }

        .skills-footer {
          text-align: center;
          padding: 15px;
          color: #445566;
          font-size: 0.85rem;
          border-top: 1px solid rgba(74, 124, 247, 0.05);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skills-title {
            font-size: 2rem;
          }

          .skills-stats {
            gap: 20px;
            flex-wrap: wrap;
          }

          .quick-filters {
            flex-direction: column;
            align-items: stretch;
          }

          .quick-filter-btn {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}

export default Skills;