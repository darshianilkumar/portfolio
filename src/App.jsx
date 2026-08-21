// import Home from "./components/home";
// import About from "./components/about";
// import internship from "./components/internship";
// import Projects from "./components/projects";
// import Contact from "./components/contact";
// import Skills from "./components/skills";
// import Resume from "./components/Resume";
// import { BrowserRouter, Routes, Route, Link,  } from "react-router-dom";
// import { useState, useEffect, useRef } from "react";
// import "./App.css";

// Custom hook for scroll progress
// const useScrollProgress = () => 
  
  
//   {
//   const [progress, setProgress] = useState(0);
  
//   useEffect(() => {
//     const updateProgress = () => {
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//       const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
//       setProgress(progress);
//     };
    
//     window.addEventListener('scroll', updateProgress);
//     return () => window.removeEventListener('scroll', updateProgress);
//   }, []);
  
//   return progress;
// };

// // Custom hook for mouse position
// const useMousePosition = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
  
//   useEffect(() => {
//     const updatePosition = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };
    
//     window.addEventListener('mousemove', updatePosition);
//     return () => window.removeEventListener('mousemove', updatePosition);
//   }, []);
  
//   return position;
// };

// function App() {
//   const [activeLink, setActiveLink] = useState("/");
//   const [isHovered, setIsHovered] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [notification, setNotification] = useState(null);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [isTyping, setIsTyping] = useState(false);
//   const [typedText, setTypedText] = useState("");
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
  
//   const scrollProgress = useScrollProgress();
//   const mousePosition = useMousePosition();
//   // const location = useLocation();
//   const mainContentRef = useRef(null);
//   const typingTimeoutRef = useRef(null);

//   // Update active link based on current path
//   useEffect(() => {
//     const path = location.pathname;
//     setActiveLink(path);
    
//     // Update active section
//     const section = path === "/" ? "home" : path.replace("/", "").toLowerCase();
//     setActiveSection(section);
    
//     // Show notification on route change
//     const pageNames = {
//       "/": "Home",
//       "/About": "About",
//       "/Skills": "Skills",
//       "/Contact": "Contact",
//       "/Projects": "Projects",
//       "/Resume": "Resume"
//     };
    
//     showNotification(` ${pageNames[path] || "Page"} loaded successfully!`, "success");
//   }, [location]);

//   // Typing effect
//   useEffect(() => {
//     const phrases = ["Developer", "Designer", "Creator", "Problem Solver"];
//     let index = 0;
//     let charIndex = 0;
//     let isDeleting = false;
    
//     const typeEffect = () => {
//       const currentPhrase = phrases[index];
      
//       if (isDeleting) {
//         setTypedText(currentPhrase.substring(0, charIndex - 1));
//         charIndex--;
//       } else {
//         setTypedText(currentPhrase.substring(0, charIndex + 1));
//         charIndex++;
//       }
      
//       if (!isDeleting && charIndex === currentPhrase.length) {
//         setTimeout(() => {
//           isDeleting = true;
//           setTimeout(typeEffect, 2000);
//         }, 2000);
//         return;
//       }
      
//       if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         index = (index + 1) % phrases.length;
//         setTimeout(typeEffect, 500);
//         return;
//       }
      
//       const speed = isDeleting ? 50 : 100;
//       setTimeout(typeEffect, speed);
//     };
    
//     typeEffect();
//   }, []);

//   // Clock update
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
    
//     return () => clearInterval(timer);
//   }, []);

//   // Scroll to top button visibility
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.pageYOffset > 300);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Notification system
//   const showNotification = (message, type = "info") => {
//     setNotification({ message, type });
//     setTimeout(() => {
//       setNotification(null);
//     }, 3000);
//   };

//   // Handle link click with animation
//   const handleLinkClick = (path, e) => {
//     e.preventDefault();
//     setIsTyping(true);
//     setActiveLink(path);
    
//     // Simulate loading
//     setTimeout(() => {
//       window.location.href = path;
//       setIsTyping(false);
//     }, 800);
//   };

//   // Toggle dark/light mode
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     showNotification(
//       isDarkMode ? " Light mode activated!" : " Dark mode activated!",
//       "info"
//     );
//   };

//   // Scroll to top
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Handle keyboard shortcuts
//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       // Ctrl+1-6 for navigation
//       if (e.ctrlKey && e.key >= '1' && e.key <= '6') {
//         e.preventDefault();
//         const routes = ["/", "/About", "/Skills", "/Contact", "/Projects", "/Resume"];
//         const route = routes[parseInt(e.key) - 1];
//         if (route) {
//           window.location.href = route;
//         }
//       }
      
//       // Escape for menu close
//       if (e.key === 'Escape') {
//         setIsMenuOpen(false);
//       }
//     };
    
//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, []);

//   // Get current time
//   const getTimeDisplay = () => {
//     return currentTime.toLocaleTimeString('en-US', { 
//       hour: '2-digit', 
//       minute: '2-digit',
//       second: '2-digit'
//     });
//   };

//   // Get greeting based on time
//   const getGreeting = () => {
//     const hour = currentTime.getHours();
//     if (hour < 12) return "Good Morning ";
//     if (hour < 17) return "Good Afternoon ";
//     return "Good Evening ";
//   };

//   return (
//     <>
//       <BrowserRouter>
//         <div className={`portfolio-container ${!isDarkMode ? 'light-mode' : ''}`}>
//           {/* Loading overlay */}
//           {isTyping && (
//             <div className="loading-overlay">
//               <div className="loader">
//                 <div className="loader-bar"></div>
//                 <p>Loading...</p>
//               </div>
//             </div>
//           )}
//
//           {/* Notification */}
//           {notification && (
//             <div className={`notification ${notification.type}`}>
//               <span className="notification-icon">
//                 {notification.type === "success" ? "" : 
//                  notification.type === "error" ? "" : "ℹ"}
//               </span>
//               <span>{notification.message}</span>
//               <button 
//                 className="notification-close"
//                 onClick={() => setNotification(null)}
//               >
//                 
//               </button>
//             </div>
//           )}
//
//           {/* Animated background particles - removed stars, using simple dots */}
//           <div className="bg-particles"></div>
          
//           {/* Mouse follower - removed purple, using blue */}
//           <div 
//             className="mouse-follower"
//             style={{
//               left: mousePosition.x - 20,
//               top: mousePosition.y - 20,
//               opacity: isDarkMode ? 0.3 : 0.1,
//               background: 'radial-gradient(circle, #007bff 0%, transparent 70%)'
//             }}
//           ></div>

//             {/* Mobile menu toggle */}
//             <button 
//               className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
//               onClick={() => {
//                 setIsMenuOpen(!isMenuOpen);
//                 showNotification(
//                   isMenuOpen ? "Menu closed" : "Menu opened",
//                   "info"
//                 );
//               }}
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>
            
//             <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
//               <Link 
//                 to="/" 
//                 className={`nav-link ${activeLink === "/" ? "active" : ""}`}
//                 onClick={() => {
//                   handleLinkClick("/");
//                   setIsMenuOpen(false);
//                 }}
//               >
//                 <span className="link-icon"></span>
//                 Home
//               </Link>
              
//               <Link 
//                 to="/About" 
//                 className={`nav-link ${activeLink === "/About" ? "active" : ""}`}
//                 onClick={() => {
//                   handleLinkClick("/About");
//                   setIsMenuOpen(false);
//                 }}
//               >
//                 <span className="link-icon"></span>
//                 About
//               </Link>
              
//               <Link 
//                 to="/Skills" 
//                 className={`nav-link ${activeLink === "/Skills" ? "active" : ""}`}
//                 onClick={() => {
//                   handleLinkClick("/Skills");
//                   setIsMenuOpen(false);
//                 }}
//               >
//                 <span className="link-icon"></span>
//                 Skills
//               </Link>
              
//               <Link 
//                 to="/Contact" 
//                 className={`nav-link ${activeLink === "/Contact" ? "active" : ""}`}
//                 onClick={() => {
//                   handleLinkClick("/Contact");
//                   setIsMenuOpen(false);
//                 }}
//               >
//                 <span className="link-icon"></span>
//                 Contact
//               </Link>
              
//               <Link 
//                 to="/Projects" 
//                 className={`nav-link ${activeLink === "/Projects" ? "active" : ""}`}
//                 onClick={() => {
//                   handleLinkClick("/Projects");
//                   setIsMenuOpen(false);
//                 }}
//               >
//                 <span className="link-icon"></span>
//                 Projects
//               </Link>
              
//               <a 
//                 href="AnilKumar.pdf" 
//                 className="nav-link resume-link"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//                 onClick={() => {
//                   showNotification("Downloading resume...", "success");
//                 }}
//               >
//                 <span className="link-icon"></span>
//                 Resume
//                 {isHovered && <span className="download-animation">v</span>}
//               </a>

//               {/* Theme toggle */}
//               <button 
//                 className="theme-toggle"
//                 onClick={toggleTheme}
//                 title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//               >
//                 {isDarkMode ? "Light" : "Dark"}
//               </button>
//             </div>
//           </nav>

//           {/* Status bar */}
//           <div className="status-bar">
//             <span className="status-item">
//               <span className="status-dot"></span>
//               <span>Active</span>
//             </span>
//             <span className="status-item">
//               <span className="status-icon"></span>
//               <span>{getTimeDisplay()}</span>
//             </span>
//             <span className="status-item">
//               <span className="status-icon"></span>
//               <span>{activeSection}</span>
//             </span>
//             <span className="status-item">
//               <span className="status-icon"></span>
//               <span>v2.0</span>
//             </span>
//           </div>

//           {/* Greeting banner */}
//           <div className="greeting-banner">
//             <span className="greeting-text">{getGreeting()}!</span>
//             <span className="greeting-subtext">
//               Welcome to my portfolio • {typedText}
//             </span>
//           </div>

//           {/* Main content */}
//           <div className="main-content" ref={mainContentRef}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/About" element={<About />} />
//               <Route path="/Skills" element={<Skills />} />
//               <Route path="/Contact" element={<Contact />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/Resume" element={<Resume />} />
//             </Routes>
//           </div>

//           {/* Scroll to top button */}
//           {showScrollTop && (
//             <button 
//               className="scroll-top-btn"
//               onClick={scrollToTop}
//               title="Scroll to top"
//             >
//               ⬆
//             </button>
//           )}

//           {/* Footer */}
//           <footer className="footer">
//             <div className="social-links">
//               <a href="#" className="social-icon" title="Twitter"></a>
//               <a href="#" className="social-icon" title="LinkedIn"></a>
//               <a href="#" className="social-icon" title="Instagram"></a>
//               <a href="#" className="social-icon" title="GitHub"></a>
//               <a href="#" className="social-icon" title="YouTube">▶</a>
//             </div>
//             <div className="footer-info">
//               <p className="footer-text">
//                 © 2026 Darshi Anil Kumar • Built with love using React
//               </p>
//               <p className="footer-shortcuts">
//                 Shortcuts: Ctrl+1-6 for navigation • ESC to close menu
//               </p>
//             </div>
//           </footer>
//         </div>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;





import Home from "./components/home";
import About from "./components/about";
import internship from "./components/internship";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Resume from "./components/Resume";
import { BrowserRouter, Routes, Route, Link,  } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./App.css";

// Custom hook for scroll progress
const useScrollProgress = () => 
  
  
  {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(progress);
    };
    
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);
  
  return progress;
};

// Custom hook for mouse position
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);
  
  return position;
};

function App() {
  const [activeLink, setActiveLink] = useState("/");
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const scrollProgress = useScrollProgress();
  const mousePosition = useMousePosition();
  // const location = useLocation();
  const mainContentRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // Update active link based on current path
  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
    
    // Update active section
    const section = path === "/" ? "home" : path.replace("/", "").toLowerCase();
    setActiveSection(section);
    
    // Show notification on route change
    const pageNames = {
      "/": "Home",
      "/About": "About",
      "/Skills": "Skills",
      "/Contact": "Contact",
      "/Projects": "Projects",
      "/Resume": "Resume"
    };
    
    showNotification(`${pageNames[path] || "Page"} loaded successfully!`, "success");
  }, [location]);

  // Typing effect
  useEffect(() => {
    const phrases = ["Developer", "Designer", "Creator", "Problem Solver"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeEffect = () => {
      const currentPhrase = phrases[index];
      
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypedText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
      }
      
      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => {
          isDeleting = true;
          setTimeout(typeEffect, 2000);
        }, 2000);
        return;
      }
      
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % phrases.length;
        setTimeout(typeEffect, 500);
        return;
      }
      
      const speed = isDeleting ? 50 : 100;
      setTimeout(typeEffect, speed);
    };
    
    typeEffect();
  }, []);

  // Clock update
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Notification system
  const showNotification = (message, type = "info") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // Handle link click with animation
  const handleLinkClick = (path, e) => {
    e.preventDefault();
    setIsTyping(true);
    setActiveLink(path);
    
    // Simulate loading
    setTimeout(() => {
      window.location.href = path;
      setIsTyping(false);
    }, 800);
  };

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    showNotification(
      isDarkMode ? " Light mode activated!" : " Dark mode activated!",
      "info"
    );
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ctrl+1-6 for navigation
      if (e.ctrlKey && e.key >= '1' && e.key <= '6') {
        e.preventDefault();
        const routes = ["/", "/About", "/Skills", "/Contact", "/Projects", "/Resume"];
        const route = routes[parseInt(e.key) - 1];
        if (route) {
          window.location.href = route;
        }
      }
      
      // Escape for menu close
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Get current time
  const getTimeDisplay = () => {
    return currentTime.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // Get greeting based on time
  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning ";
    if (hour < 17) return "Good Afternoon ";
    return "Good Evening ";
  };

  return (
    <>
      <BrowserRouter>
        <div className={`portfolio-container ${!isDarkMode ? 'light-mode' : ''}`}>
          {/* Loading overlay */}
          {isTyping && (
            <div className="loading-overlay">
              <div className="loader">
                <div className="loader-bar"></div>
                <p>Loading...</p>
              </div>
            </div>
          )}

          {/* Notification */}
          {notification && (
            <div className={`notification ${notification.type}`}>
              <span className="notification-icon">
                {notification.type === "success" ? "Success" : 
                 notification.type === "error" ? "Error" : "Info"}
              </span>
              <span>{notification.message}</span>
              <button 
                className="notification-close"
                onClick={() => setNotification(null)}
              >
                X
              </button>
            </div>
          )}

          {/* Animated background particles - removed stars, using simple dots */}
          <div className="bg-particles"></div>
          
          {/* Mouse follower - removed purple, using blue */}
          <div 
            className="mouse-follower"
            style={{
              left: mousePosition.x - 20,
              top: mousePosition.y - 20,
              opacity: isDarkMode ? 0.3 : 0.1,
              background: 'radial-gradient(circle, #007bff 0%, transparent 70%)'
            }}
          ></div>

          {/* Scroll progress bar - changed to blue */}
          <div className="scroll-progress">
            <div 
              className="scroll-progress-bar"
              style={{ width: `${scrollProgress}%`, background: '#007bff' }}
            ></div>
          </div>

          {/* Navigation */}
          <nav className="navbar" style={{ background: isDarkMode ? '#0a0a0a' : '#ffffff' }}>
            <div className="nav-brand">
              <span className="brand-icon" style={{ color: '#007bff' }}>◆</span>
              <span className="brand-text" style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>Portfolio</span>
              <span className="brand-typing" style={{ color: '#007bff' }}>| {typedText}</span>
            </div>

            {/* Mobile menu toggle */}
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                showNotification(
                  isMenuOpen ? "Menu closed" : "Menu opened",
                  "info"
                );
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <Link 
                to="/" 
                className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                onClick={() => {
                  handleLinkClick("/");
                  setIsMenuOpen(false);
                }}
                style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
              >
                <span className="link-icon" style={{ color: '#007bff' }}></span>
                Home
              </Link>
              
              <Link 
                to="/About" 
                className={`nav-link ${activeLink === "/About" ? "active" : ""}`}
                onClick={() => {
                  handleLinkClick("/About");
                  setIsMenuOpen(false);
                }}
                style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
              >
                <span className="link-icon" style={{ color: '#007bff' }}></span>
                About
              </Link>
              
              <Link 
                to="/Skills" 
                className={`nav-link ${activeLink === "/Skills" ? "active" : ""}`}
                onClick={() => {
                  handleLinkClick("/Skills");
                  setIsMenuOpen(false);
                }}
                style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
              >
                <span className="link-icon" style={{ color: '#007bff' }}></span>
                Skills
              </Link>
              
              <Link 
                to="/Contact" 
                className={`nav-link ${activeLink === "/Contact" ? "active" : ""}`}
                onClick={() => {
                  handleLinkClick("/Contact");
                  setIsMenuOpen(false);
                }}
                style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
              >
                <span className="link-icon" style={{ color: '#007bff' }}></span>
                Contact
              </Link>
              
              <Link 
                to="/Projects" 
                className={`nav-link ${activeLink === "/Projects" ? "active" : ""}`}
                onClick={() => {
                  handleLinkClick("/Projects");
                  setIsMenuOpen(false);
                }}
                style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
              >
                <span className="link-icon" style={{ color: '#007bff' }}></span>
                Projects
              </Link>
              
              <a 
                href="akresume.pdf" 
                className="nav-link resume-link"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                  showNotification("Downloading resume...", "success");
                }}
                style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
              >
                <span className="link-icon" style={{ color: '#007bff' }}></span>
                Resume
                {isHovered && <span className="download-animation" style={{ color: '#007bff' }}>v</span>}
              </a>

              {/* Theme toggle */}
              <button 
                className="theme-toggle"
                onClick={toggleTheme}
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                style={{ background: isDarkMode ? '#1a1a1a' : '#f0f0f0' }}
              >
                {isDarkMode ? "Light" : "Dark"}
              </button>
            </div>
          </nav>

          {/* Status bar - changed to black/blue */}
          <div className="status-bar" style={{ 
            background: isDarkMode ? '#0a0a0a' : '#f5f5f5',
            borderTop: '1px solid #007bff',
            borderBottom: '1px solid #007bff'
          }}>
            <span className="status-item" style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
              <span className="status-dot" style={{ background: '#007bff' }}></span>
              <span>Active</span>
            </span>
            <span className="status-item" style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
              <span className="status-icon" style={{ color: '#007bff' }}></span>
              <span>{getTimeDisplay()}</span>
            </span>
            <span className="status-item" style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
              <span className="status-icon" style={{ color: '#007bff' }}></span>
              <span>{activeSection}</span>
            </span>
            <span className="status-item" style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
              <span className="status-icon" style={{ color: '#007bff' }}></span>
              <span>v2.0</span>
            </span>
          </div>

          {/* Greeting banner - changed to black/blue */}
          <div className="greeting-banner" style={{
            background: isDarkMode ? 'linear-gradient(135deg, #0a0a0a, #1a1a2e)' : 'linear-gradient(135deg, #f5f5f5, #e3f2fd)',
            border: '1px solid #007bff'
          }}>
            <span className="greeting-text" style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{getGreeting()}!</span>
            <span className="greeting-subtext" style={{ color: '#007bff' }}>
              Welcome to my portfolio • {typedText}
            </span>
          </div>

          {/* Main content */}
          <div className="main-content" ref={mainContentRef}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/Resume" element={<Resume />} />
            </Routes>
          </div>

          {/* Scroll to top button - changed to blue */}
          {showScrollTop && (
            <button 
              className="scroll-top-btn"
              onClick={scrollToTop}
              title="Scroll to top"
              style={{
                background: '#007bff',
                color: '#ffffff',
                border: 'none'
              }}
            >
              ⬆
            </button>
          )}

          {/* Footer - changed to black/blue */}
          <footer className="footer" style={{
            background: isDarkMode ? '#0a0a0a' : '#f5f5f5',
            borderTop: '2px solid #007bff'
          }}>
            <div className="social-links">
              <a href="#" className="social-icon" title="Twitter" style={{ color: '#007bff' }}></a>
              <a href="#" className="social-icon" title="LinkedIn" style={{ color: '#007bff' }}></a>
              <a href="#" className="social-icon" title="Instagram" style={{ color: '#007bff' }}></a>
              <a href="#" className="social-icon" title="GitHub" style={{ color: '#007bff' }}></a>
              <a href="#" className="social-icon" title="YouTube" style={{ color: '#007bff' }}></a>
            </div>
            <div className="footer-info">
              <p className="footer-text" style={{ color: isDarkMode ? '#cccccc' : '#333333' }}>
                © 2026 Darshi Anil Kumar • Built with love using React
              </p>
              <p className="footer-shortcuts" style={{ color: '#007bff' }}>
                Shortcuts: Ctrl+1-6 for navigation • ESC to close menu
              </p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;