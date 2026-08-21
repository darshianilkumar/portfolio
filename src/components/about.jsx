import { useState, useEffect, useRef } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('bio');
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef(null);

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

  // Typing effect for dynamic text
  useEffect(() => {
    const words = [
      'Web Developer',
      'Frontend Developer',
      'React.js Developer',
      'Problem Solver',
      'Tech Enthusiast'
    ];
    
    const currentWord = words[currentWordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentWordIndex]);

  // Stats data
  const stats = [
    { number: '2+', label: 'Years of Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '5+', label: 'Technologies' }
  ];

  // Skills data
  const skills = [
    { name: 'HTML5', level: 90, color: '#007bff' },
    { name: 'CSS3', level: 85, color: '#0056b3' },
    { name: 'JavaScript', level: 80, color: '#003d80' },
    { name: 'React.js', level: 78, color: '#002b5c' },
    { name: 'Redux', level: 70, color: '#001a3d' },
    { name: 'Node.js', level: 65, color: '#000d1a' }
  ];

  // Bio points
  const bioPoints = [
    'Passionate Web Developer with a strong interest in front-end development',
    'Hands-on experience with HTML, CSS, JavaScript, React.js, and Redux',
    'Enjoy solving problems and learning new technologies',
    'Building responsive, user-friendly websites',
    'Seeking opportunity to begin career as a software developer',
    'Committed to continuous learning and skill improvement'
  ];

  return (
    <section 
      className={`about-section ${isVisible ? 'visible' : ''}`} 
      ref={sectionRef}
    >
      {/* Animated background particles */}
      <div className="about-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Glowing orb background - dark blue */}
      <div className="about-glow-orb"></div>

      <div className="about-container">
        {/* Header with typing effect */}
        <div className="about-header">
          <h1 className="about-title">
            About Me
            <span className="title-underline"></span>
          </h1>
          <p className="about-subtitle">
            I am a <span className="typing-text">{typedText}</span>
            <span className="cursor">|</span>
          </p>
        </div>

        {/* Main content */}
        <div className="about-content">
          {/* Text content with tab navigation */}
          <div className="about-text-content">
            {/* Tab navigation */}
            <div className="tab-navigation">
              <button 
                className={`tab-btn ${activeTab === 'bio' ? 'active' : ''}`}
                onClick={() => setActiveTab('bio')}
              >
                <span className="tab-icon">◆</span> Bio
              </button>
              <button 
                className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                <span className="tab-icon">◆</span> Skills
              </button>
              <button 
                className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
                onClick={() => setActiveTab('stats')}
              >
                <span className="tab-icon">◆</span> Stats
              </button>
            </div>

            {/* Tab content */}
            <div className="tab-content">
              {/* Bio Tab */}
              <div className={`tab-panel ${activeTab === 'bio' ? 'active' : ''}`}>
                <div className="bio-content">
                  <ul className="bio-list">
                    {bioPoints.map((point, index) => (
                      <li key={index} className="bio-item">
                        <span className="bio-bullet">▶</span>
                        <span className="bio-text">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bio-tags">
                    <span className="tag">Passionate</span>
                    <span className="tag">Creative</span>
                    <span className="tag">Ambitious</span>
                    <span className="tag">Learner</span>
                  </div>
                </div>
              </div>

              {/* Skills Tab */}
              <div className={`tab-panel ${activeTab === 'skills' ? 'active' : ''}`}>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">
                          <span className="skill-bullet" style={{ color: skill.color }}>◆</span>
                          {skill.name}
                        </span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar-fill"
                          style={{ 
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${skill.color}66, ${skill.color})`
                          }}
                        >
                          <div className="skill-bar-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Tab */}
              <div className={`tab-panel ${activeTab === 'stats' ? 'active' : ''}`}>
                <div className="stats-grid">
                  {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                      <div className="stat-progress">
                        <div 
                          className="stat-progress-fill"
                          style={{ 
                            width: `${Math.min(100, parseInt(stat.number) * 10)}%`,
                            animationDelay: `${index * 0.15}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to action button */}
            <a href="#" className="cta-button">
              <span className="cta-icon">◆</span>
              View My Resume
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 50px 20px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          background: #0a0a0a;
          min-height: 100vh;
        }

        .about-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Animated Particles */
        .about-particles {
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
          background: rgba(0, 123, 255, 0.15);
          border-radius: 50%;
          animation: floatParticle 20s infinite linear;
        }

        .particle:nth-child(1) { left: 10%; top: 20%; animation-delay: 0s; width: 6px; height: 6px; }
        .particle:nth-child(2) { left: 20%; top: 60%; animation-delay: 2s; }
        .particle:nth-child(3) { left: 30%; top: 80%; animation-delay: 4s; width: 5px; height: 5px; }
        .particle:nth-child(4) { left: 50%; top: 15%; animation-delay: 1s; }
        .particle:nth-child(5) { left: 65%; top: 70%; animation-delay: 3s; width: 7px; height: 7px; }
        .particle:nth-child(6) { left: 78%; top: 30%; animation-delay: 5s; }
        .particle:nth-child(7) { left: 88%; top: 50%; animation-delay: 2.5s; width: 5px; height: 5px; }
        .particle:nth-child(8) { left: 95%; top: 85%; animation-delay: 4.5s; }

        @keyframes floatParticle {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }

        /* Glow Orb */
        .about-glow-orb {
          position: absolute;
          width: 500px;
          height: 500px;
          bottom: -100px;
          right: -100px;
          background: radial-gradient(circle, rgba(0, 123, 255, 0.06), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: orbFloat 25s infinite ease-in-out;
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-50px, -30px) scale(1.1); }
          50% { transform: translate(30px, 20px) scale(0.9); }
          75% { transform: translate(-20px, 40px) scale(1.05); }
        }

        .about-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .about-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 10px 0 5px;
          background: linear-gradient(135deg, #007bff, #0056b3, #003d80);
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
          background: linear-gradient(90deg, #007bff, #0056b3);
          margin: 8px auto 0;
          border-radius: 4px;
          animation: underlinePulse 2s infinite;
        }

        @keyframes underlinePulse {
          0%, 100% { width: 80px; }
          50% { width: 120px; }
        }

        .about-subtitle {
          font-size: 1.2rem;
          color: #8899bb;
          margin-top: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .typing-text {
          color: #007bff;
          font-weight: 600;
          min-width: 120px;
          display: inline-block;
          text-align: left;
        }

        .cursor {
          color: #007bff;
          font-weight: 300;
          animation: blink 0.8s infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Glass Box Styling */
        .about-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          background: rgba(10, 10, 10, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 28px;
          padding: 40px;
          border: 1px solid rgba(0, 123, 255, 0.1);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
        }

        .about-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at 30% 20%,
            rgba(0, 123, 255, 0.03),
            transparent 50%
          );
          pointer-events: none;
        }

        .about-content:hover {
          border-color: rgba(0, 123, 255, 0.2);
          box-shadow: 
            0 8px 40px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 0 60px rgba(0, 123, 255, 0.02);
        }

        /* Text Content */
        .about-text-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        /* Tab Navigation - Glass Style */
        .tab-navigation {
          display: flex;
          gap: 8px;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 6px;
          border-radius: 14px;
          border: 1px solid rgba(0, 123, 255, 0.06);
        }

        .tab-btn {
          flex: 1;
          padding: 10px 15px;
          border: none;
          background: transparent;
          color: #556688;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          border-radius: 10px;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .tab-icon {
          color: #007bff;
          font-size: 0.7rem;
        }

        .tab-btn:hover {
          color: #8899bb;
          background: rgba(0, 123, 255, 0.05);
        }

        .tab-btn.active {
          color: #ffffff;
          background: rgba(0, 123, 255, 0.15);
          box-shadow: 0 2px 15px rgba(0, 123, 255, 0.1);
        }

        .tab-content {
          min-height: 250px;
          position: relative;
        }

        .tab-panel {
          display: none;
          animation: fadeSlide 0.4s ease;
        }

        .tab-panel.active {
          display: block;
        }

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Bio List - Bullet Points */
        .bio-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .bio-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 16px;
          margin-bottom: 10px;
          background: rgba(0, 123, 255, 0.03);
          border-radius: 10px;
          border: 1px solid rgba(0, 123, 255, 0.05);
          transition: all 0.3s ease;
        }

        .bio-item:hover {
          background: rgba(0, 123, 255, 0.06);
          border-color: rgba(0, 123, 255, 0.15);
          transform: translateX(5px);
        }

        .bio-bullet {
          color: #007bff;
          font-size: 0.8rem;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .bio-text {
          color: #c8d6f0;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .bio-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(0, 123, 255, 0.05);
        }

        .tag {
          padding: 6px 16px;
          border-radius: 50px;
          background: rgba(0, 123, 255, 0.08);
          border: 1px solid rgba(0, 123, 255, 0.1);
          color: #8899bb;
          font-size: 0.85rem;
          transition: 0.3s;
          cursor: default;
        }

        .tag:hover {
          background: rgba(0, 123, 255, 0.15);
          transform: translateY(-2px);
          border-color: rgba(0, 123, 255, 0.3);
          color: #ffffff;
        }

        /* Skills */
        .skills-grid {
          display: grid;
          gap: 15px;
        }

        .skill-item {
          opacity: 0;
          animation: slideUp 0.5s ease forwards;
          padding: 12px 16px;
          background: rgba(0, 123, 255, 0.03);
          border-radius: 10px;
          border: 1px solid rgba(0, 123, 255, 0.05);
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          background: rgba(0, 123, 255, 0.06);
          border-color: rgba(0, 123, 255, 0.15);
        }

        .skill-item:nth-child(1) { animation-delay: 0.1s; }
        .skill-item:nth-child(2) { animation-delay: 0.2s; }
        .skill-item:nth-child(3) { animation-delay: 0.3s; }
        .skill-item:nth-child(4) { animation-delay: 0.4s; }
        .skill-item:nth-child(5) { animation-delay: 0.5s; }
        .skill-item:nth-child(6) { animation-delay: 0.6s; }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .skill-name {
          color: #c8d6f0;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .skill-bullet {
          font-size: 0.6rem;
        }

        .skill-percentage {
          color: #556688;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .skill-bar-container {
          width: 100%;
          height: 6px;
          background: rgba(0, 123, 255, 0.06);
          border-radius: 3px;
          overflow: hidden;
          position: relative;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 3px;
          position: relative;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .skill-bar-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          to { left: 100%; }
        }

        /* Stats - Glass Cards */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .stat-card {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 14px;
          text-align: center;
          border: 1px solid rgba(0, 123, 255, 0.05);
          transition: 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 123, 255, 0.2);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
          background: rgba(0, 123, 255, 0.05);
        }

        .stat-number {
          font-size: 2.2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #007bff, #0056b3);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .stat-label {
          color: #556688;
          font-size: 0.85rem;
          margin-top: 4px;
        }

        .stat-progress {
          width: 100%;
          height: 3px;
          background: rgba(0, 123, 255, 0.06);
          border-radius: 3px;
          margin-top: 10px;
          overflow: hidden;
        }

        .stat-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #007bff, #0056b3);
          border-radius: 3px;
          animation: progressFill 1.5s ease forwards;
        }

        @keyframes progressFill {
          from { width: 0%; }
          to { width: var(--target-width); }
        }

        /* CTA Button - Glass Style */
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 30px;
          background: rgba(0, 123, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 123, 255, 0.15);
          border-radius: 14px;
          color: #007bff;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.4s;
          font-size: 0.95rem;
          margin-top: 5px;
          position: relative;
          overflow: hidden;
          align-self: flex-start;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
          transition: 0.6s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-icon {
          color: #007bff;
          font-size: 0.7rem;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 123, 255, 0.2);
          border-color: #007bff;
          background: rgba(0, 123, 255, 0.15);
          color: #ffffff;
        }

        .cta-arrow {
          transition: 0.3s;
        }

        .cta-button:hover .cta-arrow {
          transform: translateX(5px);
        }

        /* Responsive */
        @media (max-width: 968px) {
          .about-content {
            grid-template-columns: 1fr;
          }

          .about-title {
            font-size: 2.5rem;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .about-title {
            font-size: 2rem;
          }

          .about-content {
            padding: 20px;
          }

          .tab-btn {
            font-size: 0.8rem;
            padding: 8px 12px;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .bio-text {
            font-size: 0.9rem;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }

          .bio-item {
            padding: 10px 12px;
          }
        }
      `}</style>
    </section>
  );
}

export default About;