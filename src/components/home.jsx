function Home() {
  return (
    <div className="home">
      <style>
        {`
          .home {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 1rem 1.5rem;
            background: #0a0a0a;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            position: relative;
            overflow: hidden;
          }

          /* Animated background gradient */
          .home::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: 
              radial-gradient(circle at 20% 50%, rgba(0, 123, 255, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(0, 86, 179, 0.08) 0%, transparent 50%);
            animation: rotateBg 30s linear infinite;
          }

          @keyframes rotateBg {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          /* Glowing orb effects */
          .home .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            pointer-events: none;
            z-index: 0;
          }

          .home .orb-1 {
            width: 600px;
            height: 600px;
            top: -200px;
            right: -200px;
            background: rgba(0, 123, 255, 0.05);
            animation: orbFloat1 15s ease-in-out infinite;
          }

          .home .orb-2 {
            width: 500px;
            height: 500px;
            bottom: -150px;
            left: -150px;
            background: rgba(0, 86, 179, 0.04);
            animation: orbFloat2 20s ease-in-out infinite;
          }

          @keyframes orbFloat1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-80px, 50px) scale(1.2); }
            66% { transform: translate(50px, -40px) scale(0.8); }
          }

          @keyframes orbFloat2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(60px, -50px) scale(1.3); }
          }

          /* Main Content Wrapper - Full Width, Reduced Height */
          .main-content-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            max-width: 100%;
            width: 100%;
            position: relative;
            z-index: 1;
            padding: 0.5rem 0;
            flex: 1;
            justify-content: center;
          }

          /* Image at Top - Same Size */
          .profile-top {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 3px 0;
          }

          .profile-wrapper {
            position: relative;
          }

          .profile-image {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid rgba(0, 123, 255, 0.3);
            box-shadow: 
              0 0 60px rgba(0, 123, 255, 0.2),
              inset 0 0 60px rgba(0, 123, 255, 0.05);
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
          }

          .profile-image:hover {
            transform: scale(1.05);
            border-color: rgba(0, 123, 255, 0.6);
            box-shadow: 
              0 0 80px rgba(0, 123, 255, 0.4),
              0 0 160px rgba(0, 123, 255, 0.2);
          }

          .profile-ring {
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            border-radius: 50%;
            border: 2px solid transparent;
            background: linear-gradient(135deg, #007bff, #00a6ff, #0056b3, #007bff) border-box;
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            animation: ringRotate 8s linear infinite;
          }

          @keyframes ringRotate {
            to { transform: rotate(360deg); }
          }

          .profile-ring-2 {
            position: absolute;
            top: -20px;
            left: -20px;
            right: -20px;
            bottom: -20px;
            border-radius: 50%;
            border: 1px dashed rgba(0, 123, 255, 0.15);
            animation: ringRotate 20s linear infinite reverse;
          }

          /* Content Below Image - Full Width */
          .content-below {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            width: 100%;
            max-width: 100%;
          }

          /* Title - Reduced Height */
          .title-wrapper {
            text-align: center;
            width: 100%;
          }

          .home h1 {
            font-size: 4.5rem;
            font-weight: 900;
            background: linear-gradient(135deg, #00a6ff 0%, #007bff 30%, #00d4ff 60%, #007bff 100%);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: 5px;
            animation: shimmer 3s ease-in-out infinite;
            filter: drop-shadow(0 0 50px rgba(0, 123, 255, 0.2));
            margin: 0;
            padding: 0;
            line-height: 1.1;
          }

          @keyframes shimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          .home h1 .highlight-name {
            background: linear-gradient(135deg, #00d4ff, #00a6ff, #007bff);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: shimmer 3s ease-in-out infinite;
            display: inline-block;
          }

          /* Subtitle - Reduced Height */
          .home .subtitle-text {
            font-size: 1.4rem;
            color: #e0e8f0;
            font-weight: 500;
            margin: 0;
            letter-spacing: 1px;
            text-align: center;
          }

          .home .subtitle-text .typing-text {
            color: #00a6ff;
            font-weight: 700;
            text-shadow: 0 0 30px rgba(0, 166, 255, 0.3);
          }

          .home .subtitle-text .cursor {
            color: #00a6ff;
            font-weight: 300;
            animation: blink 0.8s infinite;
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          /* Description - Glass Box - Full Width, Reduced Height */
          .home .description-wrapper {
            position: relative;
            width: 100%;
            max-width: 100%;
          }

          .home h3 {
            font-size: 0.95rem;
            font-weight: 400;
            color: #c8d6f0;
            line-height: 1.7;
            text-align: left;
            padding: 1.2rem 2rem;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 20px;
            border: 1px solid rgba(0, 123, 255, 0.08);
            box-shadow: 
              0 15px 45px rgba(0, 0, 0, 0.5),
              inset 0 1px 0 rgba(255, 255, 255, 0.03);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            letter-spacing: 0.3px;
            margin: 0;
            position: relative;
            overflow: hidden;
          }

          .home h3::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(
              circle at 30% 20%,
              rgba(0, 123, 255, 0.04),
              transparent 60%
            );
            pointer-events: none;
          }

          .home h3::after {
            content: '';
            position: absolute;
            top: -1px;
            left: -1px;
            right: -1px;
            bottom: -1px;
            border-radius: 20px;
            background: linear-gradient(45deg, transparent, rgba(0, 123, 255, 0.06), transparent);
            z-index: -1;
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .home h3:hover {
            transform: translateY(-3px);
            box-shadow: 
              0 20px 50px rgba(0, 0, 0, 0.6),
              0 0 60px rgba(0, 123, 255, 0.04);
            border-color: rgba(0, 123, 255, 0.12);
          }

          .home h3:hover::after {
            opacity: 1;
          }

          /* Bullet point styling - Compact */
          .home h3 .bullet {
            display: inline-block;
            width: 7px;
            height: 7px;
            background: #00a6ff;
            border-radius: 50%;
            margin-right: 12px;
            flex-shrink: 0;
            box-shadow: 0 0 20px rgba(0, 166, 255, 0.3);
          }

          .home h3 .highlight {
            color: #00a6ff;
            font-weight: 600;
            text-shadow: 0 0 20px rgba(0, 166, 255, 0.15);
          }

          .home h3 .line {
            display: flex;
            align-items: flex-start;
            gap: 6px;
            padding: 4px 0;
            border-bottom: 1px solid rgba(0, 123, 255, 0.02);
          }

          .home h3 .line:last-child {
            border-bottom: none;
          }

          /* Scroll indicator - Smaller */
          .scroll-indicator {
            position: absolute;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            opacity: 0.25;
            animation: bounceDown 2s ease-in-out infinite;
          }

          .scroll-indicator span {
            color: #556688;
            font-size: 0.55rem;
            letter-spacing: 2px;
            text-transform: uppercase;
          }

          .scroll-indicator .mouse {
            width: 18px;
            height: 28px;
            border: 2px solid #556688;
            border-radius: 9px;
            position: relative;
          }

          .scroll-indicator .mouse::after {
            content: '';
            position: absolute;
            top: 4px;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 7px;
            background: #007bff;
            border-radius: 2px;
            animation: scrollWheel 2s ease-in-out infinite;
          }

          @keyframes scrollWheel {
            0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
            50% { transform: translateX(-50%) translateY(10px); opacity: 0; }
          }

          @keyframes bounceDown {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(6px); }
          }

          /* Responsive */
          @media (max-width: 1200px) {
            .home {
              padding: 1rem 1.5rem;
            }

            .home h1 {
              font-size: 4rem;
            }

            .home h3 {
              font-size: 0.9rem;
              padding: 1rem 1.8rem;
            }
          }

          @media (max-width: 1024px) {
            .home h1 {
              font-size: 3.5rem;
            }

            .home .subtitle-text {
              font-size: 1.2rem;
            }

            .home h3 {
              font-size: 0.88rem;
              padding: 1rem 1.5rem;
            }
          }

          @media (max-width: 768px) {
            .home {
              padding: 0.8rem 1rem;
              justify-content: flex-start;
            }

            .main-content-wrapper {
              gap: 10px;
              padding: 0.3rem 0;
            }

            .profile-image {
              width: 150px;
              height: 150px;
            }

            .profile-ring {
              top: -8px;
              left: -8px;
              right: -8px;
              bottom: -8px;
            }

            .profile-ring-2 {
              top: -16px;
              left: -16px;
              right: -16px;
              bottom: -16px;
            }

            .home h1 {
              font-size: 2.8rem;
              letter-spacing: 2px;
            }
            
            .home .subtitle-text {
              font-size: 1.1rem;
            }

            .home h3 {
              font-size: 0.85rem;
              padding: 1rem 1rem;
            }

            .home h3 .bullet {
              width: 6px;
              height: 6px;
              margin-right: 10px;
            }

            .scroll-indicator {
              display: none;
            }

            .home .orb-1 {
              width: 300px;
              height: 300px;
            }

            .home .orb-2 {
              width: 200px;
              height: 200px;
            }
          }

          @media (max-width: 480px) {
            .home {
              padding: 0.6rem 0.6rem;
            }

            .profile-image {
              width: 130px;
              height: 130px;
            }

            .home h1 {
              font-size: 2.2rem;
              letter-spacing: 1px;
            }
            
            .home .subtitle-text {
              font-size: 1rem;
            }

            .home h3 {
              font-size: 0.8rem;
              padding: 0.8rem 0.8rem;
              line-height: 1.6;
            }

            .home h3 .bullet {
              width: 5px;
              height: 5px;
              margin-right: 8px;
            }

            .main-content-wrapper {
              gap: 8px;
            }

            .content-below {
              gap: 8px;
            }
          }
        `}
      </style>

      {/* Glowing orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      {/* Main Content */}
      <div className="main-content-wrapper">
        {/* Image at Top - Same Size */}
        <div className="profile-top">
          <div className="profile-wrapper">
            <div className="profile-ring"></div>
            <div className="profile-ring-2"></div>
            <img
              src="/passport.png"
              alt="Anil Kumar"
              className="profile-image"
            />
          </div>
        </div>

        {/* Content Below */}
        <div className="content-below">
          {/* Title */}
          <div className="title-wrapper">
            <h1>
              HI... THIS IS <span className="highlight-name">ANIL</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="subtitle-text">
            I am a <span className="typing-text">Full Stack Developer</span>
            <span className="cursor">|</span>
          </p>

          {/* Description with Glass Box */}
          <div className="description-wrapper">
            <h3>
              <div className="line">
                <span className="bullet"></span>
                <span>Hi, I'm <span className="highlight">Anil Kumar Darshi</span>, a passionate Full Stack Developer.</span>
              </div>
              <div className="line">
                <span className="bullet"></span>
                <span>Skilled in building responsive, scalable, and user-friendly web applications.</span>
              </div>
              <div className="line">
                <span className="bullet"></span>
                <span>Proficient in <span className="highlight">React.js, Django, Python, JavaScript, HTML, CSS, MySQL, and REST APIs</span>.</span>
              </div>
              <div className="line">
                <span className="bullet"></span>
                <span>Enthusiastic about <span className="highlight">Machine Learning</span> and developing AI-powered solutions.</span>
              </div>
              <div className="line">
                <span className="bullet"></span>
                <span>Familiar with data preprocessing, feature engineering, model training, and ML concepts.</span>
              </div>
              <div className="line">
                <span className="bullet"></span>
                <span>Enjoy solving complex problems through clean, efficient, and maintainable code.</span>
              </div>
              <div className="line">
                <span className="bullet"></span>
                <span>Continuously learning new technologies and improving problem-solving skills.</span>
              </div>
              <div className="line">
                <span className="bullet"></span>
                <span>A collaborative team player with strong communication and adaptability.</span>
              </div>
              <div className="line">
                <span className="bullet"></span>
                <span>Seeking opportunities to contribute to innovative projects while growing as a developer.</span>
              </div>
              <div className="line">
                <span className="bullet"></span>
                <span>Dedicated to building high-quality software that creates meaningful user experiences.</span>
              </div>
            </h3>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll</span>
      </div>
    </div>
  );
}

export default Home;