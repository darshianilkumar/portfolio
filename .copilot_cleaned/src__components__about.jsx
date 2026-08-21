


// function About(){
//   return(
//     <>
//     <p>Hi, I'm a passionate Web Developer and a recent graduate with a strong interest in front-end development. I have hands-on experience with HTML, CSS, JavaScript, React.js, and Redux through personal and academic projects. I enjoy solving problems, learning new technologies, and building responsive, user-friendly websites. I am currently seeking an opportunity to begin my career as a software developer and contribute to innovative projects while continuously expanding my skills.
// </p>
//     <a href=""></a>
    
//     </>
//   )
// }
// export default About;



import { useState,useEffect,useRef } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('bio');
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
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

  // Mouse move effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  // Stats data
  const stats = [
    { number: '2+', label: 'Years of Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '5+', label: 'Technologies' }
  ];

  // Skills data
  const skills = [
    { name: 'HTML5', level: 90, color: '#e34f26' },
    { name: 'CSS3', level: 85, color: '#1572b6' },
    { name: 'JavaScript', level: 80, color: '#f7df1e' },
    { name: 'React.js', level: 78, color: '#61dafb' },
    { name: 'Redux', level: 70, color: '#764abc' },
    { name: 'Node.js', level: 65, color: '#68a063' }
  ];

  return (
    <section 
      className={`about-section ${isVisible ? 'visible' : ''}`} 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
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

      {/* Glowing orb background */}
      <div className="about-glow-orb"></div>
      
      {/* Dynamic gradient overlay */}
      <div 
        className="about-gradient-overlay"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(74, 124, 247, 0.06), transparent 60%)`
        }}
      />

      <div className="about-container">
        {/* Header with typing effect */}
        <div className="about-header">
          <span className="header-emoji"></span>
          <h1 className="about-title">
            About Me
            <span className="title-underline"></span>
          </h1>
          <p className="about-subtitle">
            <span className="subtitle-icon"></span>
            I am a <span className="typing-text">{typedText}</span>
            <span className="cursor">|</span>
          </p>
        </div>

        {/* Main content with grid layout */}
        <div className="about-content">
          {/* Profile image placeholder with animation */}
          <div className="about-image-wrapper">
            <div className="profile-image-container">
              <div className="profile-image-placeholder">
                <span className="profile-emoji"></span>
              </div>
              <div className="image-ring"></div>
              <div className="image-ring-2"></div>
            </div>
            <div className="floating-badge badge-1">
              <span></span> React.js
            </div>
            <div className="floating-badge badge-2">
              <span></span> Problem Solver
            </div>
          </div>

          {/* Text content with tab navigation */}
          <div className="about-text-content">
            {/* Tab navigation */}
            <div className="tab-navigation">
              <button 
                className={`tab-btn ${activeTab === 'bio' ? 'active' : ''}`}
                onClick={() => setActiveTab('bio')}
              >
                <span></span> Bio
              </button>
              <button 
                className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                <span></span> Skills
              </button>
              <button 
                className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
                onClick={() => setActiveTab('stats')}
              >
                <span></span> Stats
              </button>
            </div>

            {/* Tab content */}
            <div className="tab-content">
              {/* Bio Tab */}
              <div className={`tab-panel ${activeTab === 'bio' ? 'active' : ''}`}>
                <div className="bio-content">
                  <p className="bio-text">
                    <span className="quote-icon">"</span>
                    Hi, I'm a passionate Web Developer and a recent graduate with a strong interest in front-end development. 
                    I have hands-on experience with HTML, CSS, JavaScript, React.js, and Redux through personal and academic projects. 
                    <span className="highlight-text"> I enjoy solving problems, learning new technologies, and building responsive, user-friendly websites.</span> 
                    I am currently seeking an opportunity to begin my career as a software developer and contribute to innovative projects 
                    while continuously expanding my skills.
                    <span className="quote-icon">"</span>
                  </p>
                  <div className="bio-tags">
                    <span className="tag"> Passionate</span>
                    <span className="tag"> Creative</span>
                    <span className="tag"> Ambitious</span>
                    <span className="tag"> Learner</span>
                  </div>
                </div>
              </div>

              {/* Skills Tab */}
              <div className={`tab-panel ${activeTab === 'skills' ? 'active' : ''}`}>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar-fill"
                          style={{ 
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${skill.color}44, ${skill.color})`
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
              <span></span> View My Resume
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
          background: rgba(74, 124, 247, 0.15);
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
          width: 400px;
          height: 400px;
          bottom: -100px;
          left: -100px;
          background: radial-gradient(circle, rgba(74, 124, 247, 0.08), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: orbFloat 25s infinite ease-in-out;
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -30px) scale(1.1); }
          50% { transform: translate(-30px, 20px) scale(0.9); }
          75% { transform: translate(20px, 40px) scale(1.05); }
        }

        .about-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          transition: 0.3s;
        }

        .about-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .header-emoji {
          font-size: 3rem;
          display: block;
          animation: wave 2s infinite;
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-15deg); }
        }

        .about-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 10px 0 5px;
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

        .subtitle-icon {
          font-size: 1.4rem;
        }

        .typing-text {
          color: #8ab4f8;
          font-weight: 600;
          min-width: 120px;
          display: inline-block;
          text-align: left;
        }

        .cursor {
          color: #4a7cf7;
          font-weight: 300;
          animation: blink 0.8s infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .about-content {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 40px;
          background: rgba(10, 12, 25, 0.4);
          backdrop-filter: blur(20px);
          border-radius: 28px;
          padding: 35px;
          border: 1px solid rgba(74, 124, 247, 0.08);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }

        .about-content:hover {
          border-color: rgba(74, 124, 247, 0.15);
        }

        /* Image Section */
        .about-image-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-image-container {
          position: relative;
          width: 280px;
          height: 280px;
        }

        .profile-image-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a2a4a, #2a4a7a);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
          border: 3px solid rgba(74, 124, 247, 0.3);
          position: relative;
          z-index: 2;
          animation: pulseGlow 3s infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(74, 124, 247, 0.1); }
          50% { box-shadow: 0 0 40px rgba(74, 124, 247, 0.2); }
        }

        .image-ring {
          position: absolute;
          top: -8px;
          left: -8px;
          width: calc(100% + 16px);
          height: calc(100% + 16px);
          border-radius: 50%;
          border: 2px solid rgba(74, 124, 247, 0.1);
          animation: ringSpin 20s linear infinite;
        }

        .image-ring-2 {
          position: absolute;
          top: -16px;
          left: -16px;
          width: calc(100% + 32px);
          height: calc(100% + 32px);
          border-radius: 50%;
          border: 1px dashed rgba(74, 124, 247, 0.1);
          animation: ringSpin 30s linear infinite reverse;
        }

        @keyframes ringSpin {
          to { transform: rotate(360deg); }
        }

        .floating-badge {
          position: absolute;
          background: rgba(10, 12, 25, 0.9);
          backdrop-filter: blur(10px);
          padding: 10px 18px;
          border-radius: 50px;
          border: 1px solid rgba(74, 124, 247, 0.15);
          font-size: 0.85rem;
          color: #e0e8f0;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: floatBadge 4s infinite;
          z-index: 3;
        }

        .badge-1 {
          top: 20%;
          right: -10px;
          animation-delay: 0s;
        }

        .badge-2 {
          bottom: 20%;
          left: -10px;
          animation-delay: 2s;
        }

        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Text Content */
        .about-text-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .tab-navigation {
          display: flex;
          gap: 8px;
          background: rgba(10, 12, 25, 0.4);
          padding: 6px;
          border-radius: 14px;
          border: 1px solid rgba(74, 124, 247, 0.06);
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
          gap: 6px;
        }

        .tab-btn:hover {
          color: #8899bb;
          background: rgba(74, 124, 247, 0.05);
        }

        .tab-btn.active {
          color: #e0e8f0;
          background: rgba(74, 124, 247, 0.15);
          box-shadow: 0 2px 10px rgba(74, 124, 247, 0.1);
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

        .bio-text {
          color: #c8d6f0;
          line-height: 1.8;
          font-size: 1rem;
          position: relative;
          padding: 5px 0;
        }

        .quote-icon {
          font-size: 1.5rem;
          color: #4a7cf7;
          opacity: 0.3;
          margin: 0 5px;
        }

        .highlight-text {
          color: #8ab4f8;
          font-weight: 500;
          background: linear-gradient(90deg, rgba(74, 124, 247, 0.1), transparent);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .bio-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 15px;
        }

        .tag {
          padding: 6px 16px;
          border-radius: 50px;
          background: rgba(74, 124, 247, 0.08);
          border: 1px solid rgba(74, 124, 247, 0.1);
          color: #8899bb;
          font-size: 0.85rem;
          transition: 0.3s;
        }

        .tag:hover {
          background: rgba(74, 124, 247, 0.15);
          transform: translateY(-2px);
          border-color: rgba(74, 124, 247, 0.3);
        }

        .skills-grid {
          display: grid;
          gap: 15px;
        }

        .skill-item {
          opacity: 0;
          animation: slideUp 0.5s ease forwards;
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
          margin-bottom: 6px;
        }

        .skill-name {
          color: #c8d6f0;
          font-size: 0.9rem;
        }

        .skill-percentage {
          color: #556688;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .skill-bar-container {
          width: 100%;
          height: 6px;
          background: rgba(74, 124, 247, 0.06);
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
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          to { left: 100%; }
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .stat-card {
          background: rgba(10, 12, 25, 0.4);
          padding: 20px;
          border-radius: 14px;
          text-align: center;
          border: 1px solid rgba(74, 124, 247, 0.05);
          transition: 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-3px);
          border-color: rgba(74, 124, 247, 0.15);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }

        .stat-number {
          font-size: 2.2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #4a7cf7, #8ab4f8);
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
          background: rgba(74, 124, 247, 0.06);
          border-radius: 3px;
          margin-top: 10px;
          overflow: hidden;
        }

        .stat-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4a7cf7, #8ab4f8);
          border-radius: 3px;
          animation: progressFill 1.5s ease forwards;
          width: 0%;
        }

        @keyframes progressFill {
          from { width: 0%; }
          to { width: var(--target-width); }
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 30px;
          background: linear-gradient(135deg, #1a2a4a, #2a4a7a);
          border: 1px solid rgba(74, 124, 247, 0.2);
          border-radius: 14px;
          color: #8ab4f8;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.4s;
          font-size: 0.95rem;
          margin-top: 5px;
          position: relative;
          overflow: hidden;
          align-self: flex-start;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(74, 124, 247, 0.2);
          border-color: #4a7cf7;
        }

        .cta-arrow {
          transition: 0.3s;
        }

        .cta-button:hover .cta-arrow {
          transform: translateX(5px);
        }

        @media (max-width: 968px) {
          .about-content {
            grid-template-columns: 1fr;
          }

          .about-image-wrapper {
            order: 1;
          }

          .about-text-content {
            order: 2;
          }

          .profile-image-container {
            width: 200px;
            height: 200px;
          }

          .profile-image-placeholder {
            font-size: 4rem;
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

          .profile-image-container {
            width: 160px;
            height: 160px;
          }

          .profile-image-placeholder {
            font-size: 3rem;
          }

          .tab-btn {
            font-size: 0.8rem;
            padding: 8px 12px;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .floating-badge {
            font-size: 0.7rem;
            padding: 6px 12px;
          }

          .badge-1 {
            right: 0;
            top: 15%;
          }

          .badge-2 {
            left: 0;
            bottom: 15%;
          }
        }
      `}</style>
    </section>
  );
}

export default About;