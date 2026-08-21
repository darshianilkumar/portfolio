// // function Home() {
// //   return (
// //     <div className="home">

// //       <img
// //         src="/Anil.jpg"
// //         alt="Anil Kumar"
// //         className="profile-image"
// //       />

// //       <h1>HI...THIS IS ANIL KUMAR</h1>

// //       <h3>
// //         Hi, I'm Anil Kumar Darshi, a Full Stack Developer with a passion
// //         for building scalable, high-performance web applications and
// //         intelligent software solutions. I also have an interest in
// //         Machine Learning and enjoy exploring how AI and data-driven
// //         models can be integrated into real-world applications.
// //       </h3>

// //     </div>
// //   );
// // }

// // export default Home;




// function Home() {
//   return (
//     <div className="home">
//       <style>
//         {`
//           .home {
//             min-height: 100vh;
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//             padding: 2rem;
//             background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//             font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//             position: relative;
//             overflow: hidden;
//           }

//           .home::before {
//             content: '';
//             position: absolute;
//             top: -50%;
//             left: -50%;
//             width: 200%;
//             height: 200%;
//             background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.05) 0%, transparent 50%);
//             animation: rotate 20s linear infinite;
//           }

//           @keyframes rotate {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//           }

//           .profile-image {
//             width: 200px;
//             height: 200px;
//             border-radius: 50%;
//             object-fit: cover;
//             border: 5px solid rgba(255, 255, 255, 0.8);
//             box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
//             margin-bottom: 2rem;
//             animation: float 3s ease-in-out infinite;
//             position: relative;
//             z-index: 1;
//             transition: transform 0.3s ease, box-shadow 0.3s ease;
//           }

//           .profile-image:hover {
//             transform: scale(1.05) rotate(5deg);
//             box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
//           }

//           @keyframes float {
//             0%, 100% { transform: translateY(0px); }
//             50% { transform: translateY(-20px); }
//           }

//           .home h1 {
//             font-size: 3.5rem;
//             font-weight: 800;
//             color: #fff;
//             text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
//             margin: 1rem 0;
//             letter-spacing: 2px;
//             position: relative;
//             z-index: 1;
//             animation: slideInLeft 1s ease-out;
//             text-align: center;
//           }

//           .home h1::after {
//             content: '';
//             display: inline-block;
//             margin-left: 15px;
//             animation: wave 2s ease-in-out infinite;
//           }

//           @keyframes wave {
//             0%, 100% { transform: rotate(0deg); }
//             25% { transform: rotate(20deg); }
//             75% { transform: rotate(-20deg); }
//           }

//           @keyframes slideInLeft {
//             from {
//               opacity: 0;
//               transform: translateX(-100px);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }

//           .home h3 {
//             max-width: 800px;
//             font-size: 1.2rem;
//             font-weight: 400;
//             color: rgba(255, 255, 255, 0.95);
//             line-height: 1.8;
//             text-align: center;
//             padding: 1.5rem 2rem;
//             background: rgba(255, 255, 255, 0.1);
//             backdrop-filter: blur(10px);
//             border-radius: 20px;
//             border: 1px solid rgba(255, 255, 255, 0.2);
//             box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
//             position: relative;
//             z-index: 1;
//             animation: slideInRight 1s ease-out 0.3s both;
//             transition: transform 0.3s ease, box-shadow 0.3s ease;
//           }

//           .home h3:hover {
//             transform: translateY(-5px) scale(1.02);
//             box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
//           }

//           @keyframes slideInRight {
//             from {
//               opacity: 0;
//               transform: translateX(100px);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }

//           /* Floating particles effect */
//           .home::after {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: 
//               radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.3), transparent),
//               radial-gradient(2px 2px at 40% 70%, rgba(255,255,255,0.3), transparent),
//               radial-gradient(2px 2px at 60% 20%, rgba(255,255,255,0.3), transparent),
//               radial-gradient(2px 2px at 80% 60%, rgba(255,255,255,0.3), transparent);
//             background-size: 200px 200px;
//             animation: sparkle 4s ease-in-out infinite;
//             pointer-events: none;
//             z-index: 0;
//           }

//           @keyframes sparkle {
//             0%, 100% { opacity: 0.3; }
//             50% { opacity: 1; }
//           }

//           /* Responsive adjustments */
//           @media (max-width: 768px) {
//             .home h1 {
//               font-size: 2.2rem;
//             }
            
//             .home h3 {
//               font-size: 1rem;
//               padding: 1rem 1.2rem;
//               margin: 0 1rem;
//             }
            
//             .profile-image {
//               width: 150px;
//               height: 150px;
//             }
//           }

//           @media (max-width: 480px) {
//             .home h1 {
//               font-size: 1.8rem;
//             }
            
//             .profile-image {
//               width: 120px;
//               height: 120px;
//             }
//           }
//         `}
//       </style>

//       <img
//         src="/Anil.jpg"
//         alt="Anil Kumar"
//         className="profile-image"
//       />

//       <h1>HI...THIS IS ANIL KUMAR</h1>

//       <h3>
//         Hi, I'm Anil Kumar Darshi, a Full Stack Developer with a passion
//         for building scalable, high-performance web applications and
//         intelligent software solutions. I also have an interest in
//         Machine Learning and enjoy exploring how AI and data-driven
//         models can be integrated into real-world applications.
//       </h3>

//     </div>
//   );
// }

// export default Home;





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
            justify-content: center;
            padding: 2rem;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 30%, #2d1b4e 60%, #1a0a2e 100%);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            position: relative;
            overflow: hidden;
          }

          .home::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: 
              radial-gradient(circle at 20% 50%, rgba(128, 0, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(75, 0, 130, 0.1) 0%, transparent 50%);
            animation: rotate 25s linear infinite;
          }

          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          /* Animated glowing border effect */
          .home::after {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #4a0080, #8a2be2, #4a0080, #8a2be2);
            background-size: 400% 400%;
            animation: gradientBorder 6s ease infinite;
            z-index: -1;
            filter: blur(20px);
            opacity: 0.3;
          }

          @keyframes gradientBorder {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .profile-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #8a2be2;
            box-shadow: 
              0 0 30px rgba(138, 43, 226, 0.3),
              0 0 60px rgba(138, 43, 226, 0.2),
              inset 0 0 30px rgba(138, 43, 226, 0.1);
            margin-bottom: 2rem;
            animation: float 4s ease-in-out infinite, glowPulse 3s ease-in-out infinite;
            position: relative;
            z-index: 1;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .profile-image:hover {
            transform: scale(1.08) rotate(3deg);
            box-shadow: 
              0 0 50px rgba(138, 43, 226, 0.6),
              0 0 100px rgba(138, 43, 226, 0.4),
              0 0 150px rgba(138, 43, 226, 0.2);
            border-color: #a855f7;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-25px); }
          }

          @keyframes glowPulse {
            0%, 100% { box-shadow: 0 0 30px rgba(138, 43, 226, 0.3), 0 0 60px rgba(138, 43, 226, 0.2); }
            50% { box-shadow: 0 0 50px rgba(138, 43, 226, 0.5), 0 0 100px rgba(138, 43, 226, 0.3); }
          }

          .home h1 {
            font-size: 3.8rem;
            font-weight: 900;
            background: linear-gradient(135deg, #a855f7 0%, #8a2be2 30%, #d8b4fe 60%, #8a2be2 100%);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 1rem 0;
            letter-spacing: 3px;
            position: relative;
            z-index: 1;
            animation: slideInLeft 1s ease-out, shimmer 4s ease-in-out infinite;
            text-align: center;
            text-shadow: none;
            filter: drop-shadow(0 0 20px rgba(138, 43, 226, 0.3));
          }

          @keyframes shimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          .home h1::after {
            content: '';
            display: inline-block;
            margin-left: 5px;
            -webkit-text-fill-color: initial;
            animation: pulse 1.5s ease-in-out infinite, rotate 4s linear infinite;
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.3); opacity: 0.7; }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-100px) scale(0.8);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          .home h3 {
            max-width: 800px;
            font-size: 1.2rem;
            font-weight: 400;
            color: #e2d5f5;
            line-height: 1.8;
            text-align: center;
            padding: 1.8rem 2.5rem;
            background: rgba(26, 10, 46, 0.7);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            border: 1px solid rgba(138, 43, 226, 0.3);
            box-shadow: 
              0 15px 45px rgba(0, 0, 0, 0.5),
              inset 0 1px 0 rgba(138, 43, 226, 0.2);
            position: relative;
            z-index: 1;
            animation: slideInRight 1s ease-out 0.3s both;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            letter-spacing: 0.3px;
          }

          .home h3::before {
            content: '';
            position: absolute;
            top: -1px;
            left: -1px;
            right: -1px;
            bottom: -1px;
            border-radius: 24px;
            background: linear-gradient(45deg, #4a0080, #8a2be2, #4a0080, #8a2be2);
            background-size: 400% 400%;
            animation: gradientBorder 4s ease infinite;
            z-index: -1;
            opacity: 0.3;
          }

          .home h3:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 
              0 25px 60px rgba(0, 0, 0, 0.6),
              0 0 40px rgba(138, 43, 226, 0.2),
              inset 0 1px 0 rgba(138, 43, 226, 0.3);
            border-color: rgba(138, 43, 226, 0.5);
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100px) scale(0.8);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          /* Animated particle stars */
          .home .stars {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
          }

          .home .star {
            position: absolute;
            width: 3px;
            height: 3px;
            background: #8a2be2;
            border-radius: 50%;
            animation: twinkle var(--duration) ease-in-out infinite;
            box-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
          }

          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .home h1 {
              font-size: 2.4rem;
            }
            
            .home h3 {
              font-size: 1rem;
              padding: 1.2rem 1.5rem;
              margin: 0 1rem;
            }
            
            .profile-image {
              width: 150px;
              height: 150px;
            }
          }

          @media (max-width: 480px) {
            .home h1 {
              font-size: 3.8rem;
              letter-spacing: 1px;
            }
            
            .profile-image {
              width: 120px;
              height: 120px;
            }
            
            .home h3 {
              font-size: 0.9rem;
              padding: 1rem 1.2rem;
            }
          }
        `}
      </style>

      {/* Animated stars */}
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              '--duration': `${2 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      <img
        src="/Anil.jpg"
        alt="Anil Kumar"
        className="profile-image"
      />

      <h1>HI...THIS IS ANIL</h1>

      <h3>
    
## About Me

*  Hi, I'm **Anil Kumar Darshi**, a passionate **Full Stack Developer**. <br /> <br />
*  Skilled in building responsive, scalable, and user-friendly web applications.
*  Proficient in **React.js, Django, Python, JavaScript, HTML, CSS, MySQL, and REST APIs**.
*  Enthusiastic about **Machine Learning** and interested in developing AI-powered solutions for real-world problems.
*  Familiar with data preprocessing, feature engineering, model training, and basic machine learning concepts.
*  Enjoy solving complex problems through clean, efficient, and maintainable code.
*  Continuously learning new technologies and improving my technical and problem-solving skills.
*  A collaborative team player with strong communication and adaptability.
*  Seeking opportunities to contribute to innovative projects while growing as a Full Stack Developer.
*  Dedicated to building high-quality software that creates meaningful user experiences and delivers real-world impact.
  </ h3>

    </div>
  );
}

export default Home;