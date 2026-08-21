

// function contact(){
//   return(
//     <>
    
//     </>
//   )
// }
// export default contact;

// import "./Contact.css";
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

// function Contact() {
//   return (
//     <section className="contact" id="contact">
//       <div className="contact-container">
//         <h1>Get In Touch</h1>
//         <p>
//           I'm always open to internship opportunities, full-time roles,
//           freelance work, and collaborations. Feel free to reach out!
//         </p>

//         <div className="contact-content">
//           {/* Contact Details */}
//           <div className="contact-info">
//             <div className="card">
//               {/* <FaEnvelope className="icon" /> */}
//               <div>
//                 <h3>Email</h3>
//                 <p>darshianilkumarak26@gmail.com</p>
//               </div>
//             </div>

//             <div className="card">
//               {/* <FaPhoneAlt className="icon" /> */}
//               <div>
//                 <h3>Phone</h3>
//                 <p>+91 9133582581</p>
//               </div>
//             </div>

//             <div className="card">
//               {/* <FaMapMarkerAlt className="icon" /> */}
//               <div>
//                 <h3>Location</h3>
//                 <p>Hyderabad, Telangana, India</p>
//               </div>
//             </div>

//             <div className="social-icons">
//               <a
//                 href="https://github.com/yourusername"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 {/* <FaGithub /> */}
//               </a>

//               <a
//                 href="https://linkedin.com/in/yourusername"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 {/* <FaLinkedin /> */}
//               </a>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form className="contact-form">
//             <input type="text" placeholder="Your Name" required />
//             <input type="email" placeholder="Your Email" required />
//             <input type="text" placeholder="Subject" />
//             <textarea rows="5" placeholder="Your Message"></textarea>

//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;


// function Contact() {
//   const form = useRef();

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_pshmfi5",
//         "YOUR_TEMPLATE_ID",
//         form.current,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(
//         function (result) {
//           alert("Message Sent Successfully!");
//           console.log(result.text);
//         },
//         function (error) {
//           alert("Failed to send message!");
//           console.log(error.text);
//         }
//       );

//     e.target.reset();
//   }}

// function Contact() {
//   const form = useRef();

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         form.current,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(
//         function (result) {
//           alert("Message Sent Successfully!");
//           console.log(result.text);
//         },
//         function (error) {
//           alert("Failed to send message!");
//           console.log(error.text);
//         }
//       );

//     e.target.reset();
//   }}



import emailjs from '@emailjs/browser'

import { useState,useRef,useEffect } from "react";





function Contact() {

  const form=useRef();

  function sendEmail(e) {

    e.preventDefault();
    emailjs.sendForm("service_v2ulvi4","template_jmxh0tj",form.current,"qqhogW7Hw5VbsnRSs").then(
      ()=>{
        alert("message sent successfully");
        form.current.reser();
      },(error)=>{
        alert("failed to sent message,please try again",error.text);
      }
    )

  }
  // Add state for interactive features
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [charCount, setCharCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('loading');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success simulation
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setCharCount(0);
    
    setTimeout(() => {
      setSubmitStatus(null);
      setIsSubmitting(false);
    }, 3000);
  };

  // Mouse move effect for interactive background
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  // Social media links with icons
  const socialLinks = [
    { icon: '🐙', label: 'GitHub', url: 'https://github.com/yourusername', color: '#4a7cf7' },
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', color: '#0a66c2' },
    { icon: '🐦', label: 'Twitter', url: 'https://twitter.com/yourusername', color: '#1da1f2' },
    { icon: '📱', label: 'Instagram', url: 'https://instagram.com/yourusername', color: '#e4405f' }
  ];

  return (
    <section className={`contact ${isVisible ? 'visible' : ''}`} id="contact" ref={sectionRef}>
      <div className="contact-container">
        {/* Animated particles background */}
        <div className="contact-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>

        {/* Glowing orb effect */}
        <div className="glow-orb"></div>

        <h1 className="contact-title">
          <span className="title-wave">👋</span>
          Get In Touch
          <span className="title-underline"></span>
        </h1>
        
        <p className="contact-description">
          <span className="pulse-icon">💬</span>
          I'm always open to internship opportunities, full-time roles,
          freelance work, and collaborations. Feel free to reach out!
          <span className="typing-cursor"></span>
        </p>

        <div className="contact-content" onMouseMove={handleMouseMove}>
          {/* Dynamic gradient overlay */}
          <div 
            className="dynamic-overlay"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(74, 124, 247, 0.08), transparent 60%)`
            }}
          />

          {/* Contact Details */}
          <div className="contact-info">
            <div 
              className={`card ${hoveredCard === 0 ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: '0.1s' }}
            >
              <div className="card-icon-wrapper">
                <span className="card-icon">📧</span>
                <span className="card-glow"></span>
              </div>
              <div className="card-content">
                <h3>Email</h3>
                <p>darshianilkumarak26@gmail.com</p>
                <span className="card-hint">✉️ Click to copy</span>
              </div>
            </div>

            <div 
              className={`card ${hoveredCard === 1 ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="card-icon-wrapper">
                <span className="card-icon">📞</span>
                <span className="card-glow"></span>
              </div>
              <div className="card-content">
                <h3>Phone</h3>
                <p>+91 9133582581</p>
                <span className="card-hint">📱 Click to call</span>
              </div>
            </div>

            <div 
              className={`card ${hoveredCard === 2 ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="card-icon-wrapper">
                <span className="card-icon">📍</span>
                <span className="card-glow"></span>
              </div>
              <div className="card-content">
                <h3>Location</h3>
                <p>Hyderabad, Telangana, India</p>
                <span className="card-hint">🌍 View on map</span>
              </div>
            </div>

            {/* Availability status with animated pulse */}
            <div className="status-card" style={{ animationDelay: '0.4s' }}>
              <div className="status-content">
                <div className="status-dot-wrapper">
                  <span className="status-dot"></span>
                  <span className="status-pulse"></span>
                </div>
                <div className="status-text">
                  <span className="status-label">Available for opportunities</span>
                  <span className="status-time">⏱️ Responds within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Social Icons with animated tooltips */}
            <div className="social-section" style={{ animationDelay: '0.5s' }}>
              <p className="social-label">
                <span className="label-icon">🤝</span>
                Connect with me
              </p>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                    style={{ 
                      '--hover-color': social.color,
                      animationDelay: `${index * 0.1}s`
                    }}
                    title={social.label}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-tooltip">{social.label}</span>
                    <span className="social-ring"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form with enhanced interactions */}
          <form ref={form} onSubmit={sendEmail} className="contact-form" >
            <div className="form-header">
              <h3>
                <span className="form-icon">📝</span>
                Send a Message
              </h3>
              <span className="form-subtitle">I'll get back to you soon!</span>
            </div>

            <div className="form-group">
              <div className={`input-wrapper ${focusedField === 'name' ? 'focused' : ''}`}>
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="form-input"
                />
                <div className="input-bar"></div>
                <div className="input-shimmer"></div>
              </div>
            </div>

            <div className="form-group">
              <div className={`input-wrapper ${focusedField === 'email' ? 'focused' : ''}`}>
                <span className="input-icon">✉️</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="form-input"
                />
                <div className="input-bar"></div>
                <div className="input-shimmer"></div>
              </div>
            </div>

            <div className="form-group">
              <div className={`input-wrapper ${focusedField === 'subject' ? 'focused' : ''}`}>
                <span className="input-icon">📌</span>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className="form-input"
                />
                <div className="input-bar"></div>
                <div className="input-shimmer"></div>
              </div>
            </div>

            <div className="form-group">
              <div className={`input-wrapper textarea-wrapper ${focusedField === 'message' ? 'focused' : ''}`}>
                <span className="input-icon">💭</span>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="form-textarea"
                  maxLength="500"
                />
                <div className="input-bar"></div>
                <div className="input-shimmer"></div>
                <span className="char-counter">{charCount}/500</span>
              </div>
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <span>✅</span> Sent Successfully!
                </>
              ) : (
                <>
                  <span>🚀</span> Send Message
                  <span className="btn-shimmer"></span>
                </>
              )}
            </button>

            {submitStatus === 'error' && (
              <div className="form-error">
                ❌ Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>

        {/* Footer note with animated border */}
        <div className="contact-footer">
          <span className="footer-emoji">⚡</span>
          <span>Available for immediate collaboration</span>
          <span className="footer-emoji">⚡</span>
        </div>
      </div>

      <style>{`
        .contact {
          padding: 50px 20px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Animated Particles */
        .contact-particles {
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
          background: rgba(74, 124, 247, 0.3);
          border-radius: 50%;
          animation: floatParticle 15s infinite linear;
        }

        .particle-1 { left: 10%; top: 20%; animation-delay: 0s; }
        .particle-2 { left: 25%; top: 60%; animation-delay: 3s; width: 6px; height: 6px; }
        .particle-3 { left: 80%; top: 30%; animation-delay: 6s; }
        .particle-4 { left: 65%; top: 80%; animation-delay: 9s; width: 5px; height: 5px; }
        .particle-5 { left: 45%; top: 10%; animation-delay: 12s; }

        @keyframes floatParticle {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }

        /* Glow Orb */
        .glow-orb {
          position: absolute;
          width: 300px;
          height: 300px;
          top: -100px;
          right: -100px;
          background: radial-gradient(circle, rgba(74, 124, 247, 0.1), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: orbFloat 20s infinite ease-in-out;
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, 30px) scale(1.1); }
          66% { transform: translate(30px, -20px) scale(0.9); }
        }

        .contact-title {
          font-size: 1.8rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 15px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          background: linear-gradient(135deg, #4a7cf7, #8ab4f8, #4a7cf7);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .title-wave {
          display: inline-block;
          animation: wave 2s infinite;
          font-size: 3rem;
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-15deg); }
        }

        .title-underline {
          display: block;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #4a7cf7, #8ab4f8, #4a7cf7);
          margin: 10px auto 0;
          border-radius: 4px;
          animation: underlinePulse 2s infinite;
        }

        @keyframes underlinePulse {
          0%, 100% { width: 80px; opacity: 1; }
          50% { width: 120px; opacity: 0.7; }
        }

        .contact-description {
          text-align: center;
          color: #8899bb;
          max-width: 650px;
          margin: 0 auto 35px;
          line-height: 1.8;
          font-size: 1.05rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          padding: 0 20px;
        }

        .pulse-icon {
          animation: iconPulse 2s infinite;
        }

        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .typing-cursor {
          display: inline-block;
          width: 3px;
          height: 20px;
          background: #4a7cf7;
          animation: cursorBlink 1s infinite;
          margin-left: 4px;
        }

        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 35px;
          position: relative;
          background: rgba(10, 12, 25, 0.5);
          backdrop-filter: blur(20px);
          border-radius: 28px;
          padding: 35px;
          border: 1px solid rgba(74, 124, 247, 0.08);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          transition: all 0.3s;
        }

        .contact-content:hover {
          border-color: rgba(74, 124, 247, 0.15);
          box-shadow: 0 12px 60px rgba(0, 0, 0, 0.4);
        }

        .dynamic-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          transition: 0.3s;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .card {
          background: rgba(10, 12, 25, 0.6);
          border-radius: 18px;
          padding: 20px;
          border: 1px solid rgba(74, 124, 247, 0.06);
          display: flex;
          align-items: center;
          gap: 18px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: cardSlideIn 0.6s ease forwards;
        }

        @keyframes cardSlideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(74, 124, 247, 0.05), transparent);
          opacity: 0;
          transition: 0.3s;
        }

        .card.hovered::before {
          opacity: 1;
        }

        .card.hovered {
          transform: translateX(8px) scale(1.02);
          border-color: rgba(74, 124, 247, 0.3);
          box-shadow: 0 8px 30px rgba(74, 124, 247, 0.15);
        }

        .card-icon-wrapper {
          position: relative;
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(74, 124, 247, 0.08);
          border-radius: 14px;
          transition: 0.3s;
        }

        .card.hovered .card-icon-wrapper {
          background: rgba(74, 124, 247, 0.15);
          transform: scale(1.1);
        }

        .card-icon {
          font-size: 1.8rem;
          position: relative;
          z-index: 2;
        }

        .card-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(74, 124, 247, 0.2), transparent 70%);
          border-radius: 14px;
          opacity: 0;
          transition: 0.3s;
        }

        .card.hovered .card-glow {
          opacity: 1;
        }

        .card-content {
          flex: 1;
        }

        .card-content h3 {
          font-size: 0.8rem;
          color: #556688;
          margin: 0 0 4px 0;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }

        .card-content p {
          color: #e0e8f0;
          font-size: 0.95rem;
          margin: 0;
          font-weight: 500;
        }

        .card-hint {
          font-size: 0.7rem;
          color: #4a7cf7;
          opacity: 0;
          transition: 0.3s;
          display: block;
          margin-top: 4px;
        }

        .card.hovered .card-hint {
          opacity: 1;
        }

        .status-card {
          background: rgba(74, 124, 247, 0.06);
          border-radius: 18px;
          padding: 18px 20px;
          border: 1px solid rgba(74, 124, 247, 0.1);
          opacity: 0;
          animation: cardSlideIn 0.6s ease forwards;
        }

        .status-content {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .status-dot-wrapper {
          position: relative;
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        .status-dot {
          width: 14px;
          height: 14px;
          background: #4ade80;
          border-radius: 50%;
          display: block;
          position: relative;
          z-index: 2;
        }

        .status-pulse {
          position: absolute;
          top: -2px;
          left: -2px;
          width: 18px;
          height: 18px;
          background: rgba(74, 222, 128, 0.3);
          border-radius: 50%;
          animation: statusPulse 2s infinite;
        }

        @keyframes statusPulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .status-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .status-label {
          color: #e0e8f0;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .status-time {
          color: #556688;
          font-size: 0.8rem;
        }

        .social-section {
          opacity: 0;
          animation: cardSlideIn 0.6s ease forwards;
        }

        .social-label {
          color: #556688;
          font-size: 0.85rem;
          text-align: center;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .label-icon {
          font-size: 1.2rem;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .social-link {
          position: relative;
          text-decoration: none;
          font-size: 1.6rem;
          padding: 12px;
          border-radius: 50%;
          background: rgba(10, 12, 25, 0.6);
          border: 2px solid rgba(74, 124, 247, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          opacity: 0;
          animation: socialPopIn 0.5s ease forwards;
        }

        @keyframes socialPopIn {
          from { opacity: 0; transform: scale(0.5) rotate(-30deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        .social-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid transparent;
          transition: 0.3s;
          top: -2px;
          left: -2px;
        }

        .social-link:hover .social-ring {
          border-color: var(--hover-color);
          animation: ringPulse 1s ease;
        }

        @keyframes ringPulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }

        .social-link:hover {
          transform: translateY(-8px) scale(1.1);
          border-color: var(--hover-color);
          box-shadow: 0 10px 30px rgba(74, 124, 247, 0.2);
        }

        .social-tooltip {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.65rem;
          color: #8899bb;
          opacity: 0;
          transition: 0.3s;
          white-space: nowrap;
          background: rgba(10, 12, 25, 0.9);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(74, 124, 247, 0.1);
        }

        .social-link:hover .social-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(-5px);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-header {
          margin-bottom: 5px;
        }

        .form-header h3 {
          font-size: 1.2rem;
          color: #e0e8f0;
          margin: 0 0 4px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .form-icon {
          font-size: 1.3rem;
        }

        .form-subtitle {
          color: #556688;
          font-size: 0.85rem;
        }

        .form-group {
          position: relative;
        }

        .input-wrapper {
          position: relative;
          transition: 0.3s;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.2rem;
          opacity: 0.4;
          transition: 0.3s;
          pointer-events: none;
          z-index: 2;
        }

        .textarea-wrapper .input-icon {
          top: 20px;
          transform: none;
        }

        .input-wrapper.focused .input-icon {
          opacity: 1;
          transform: translateY(-50%) scale(1.1);
        }

        .textarea-wrapper.focused .input-icon {
          transform: none;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 15px 15px 15px 48px;
          border-radius: 14px;
          border: 2px solid rgba(74, 124, 247, 0.08);
          background: rgba(10, 12, 25, 0.6);
          color: #e0e8f0;
          font-size: 1rem;
          transition: all 0.4s;
          outline: none;
          font-family: inherit;
          position: relative;
          z-index: 1;
        }

        .form-textarea {
          padding: 15px 15px 15px 48px;
          resize: vertical;
          min-height: 120px;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #4a7cf7;
          box-shadow: 0 0 30px rgba(74, 124, 247, 0.05);
          background: rgba(10, 12, 25, 0.8);
        }

        .input-bar {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #4a7cf7, #8ab4f8);
          transition: 0.4s;
          border-radius: 3px;
          z-index: 3;
        }

        .input-wrapper.focused .input-bar {
          width: 100%;
          left: 0;
        }

        .input-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(74, 124, 247, 0.03), transparent);
          transition: 0.6s;
          pointer-events: none;
          z-index: 0;
        }

        .input-wrapper:hover .input-shimmer {
          left: 100%;
        }

        .char-counter {
          position: absolute;
          bottom: 12px;
          right: 15px;
          font-size: 0.7rem;
          color: #556688;
          z-index: 2;
        }

        .submit-btn {
          padding: 16px 30px;
          border-radius: 14px;
          border: none;
          background: linear-gradient(135deg, #1a2a4a, #2a4a7a);
          color: #8ab4f8;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 1px solid rgba(74, 124, 247, 0.2);
          position: relative;
          overflow: hidden;
        }

        .btn-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(74, 124, 247, 0.1), transparent);
          transition: 0.6s;
        }

        .submit-btn:hover:not(:disabled) .btn-shimmer {
          left: 100%;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px rgba(74, 124, 247, 0.25);
          border-color: #4a7cf7;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-btn.submitting {
          background: linear-gradient(135deg, #1a2a4a, #2a4a7a);
        }

        .submit-btn.success {
          background: linear-gradient(135deg, #065f46, #047857);
          border-color: #4ade80;
        }

        .spinner {
          width: 22px;
          height: 22px;
          border: 3px solid rgba(74, 124, 247, 0.15);
          border-top: 3px solid #4a7cf7;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .form-error {
          padding: 12px;
          background: rgba(248, 113, 113, 0.08);
          border: 1px solid rgba(248, 113, 113, 0.2);
          border-radius: 10px;
          color: #f87171;
          text-align: center;
          font-size: 0.9rem;
        }

        .contact-footer {
          margin-top: 35px;
          padding: 15px;
          text-align: center;
          border-top: 1px solid rgba(74, 124, 247, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #445566;
          font-size: 0.9rem;
        }

        .footer-emoji {
          animation: footerPulse 2s infinite;
        }

        @keyframes footerPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
          }

          .contact-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 600px) {
          .contact-title {
            font-size: 2rem;
          }

          .contact-content {
            padding: 20px;
          }

          .card {
            padding: 15px;
          }

          .card-icon-wrapper {
            width: 40px;
            height: 40px;
          }

          .card-icon {
            font-size: 1.4rem;
          }

          .social-link {
            width: 45px;
            height: 45px;
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;