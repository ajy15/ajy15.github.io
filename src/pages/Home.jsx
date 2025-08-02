import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', // Start from top instead of center
        minHeight: '100vh',
        width: '100vw', // Full viewport width
        margin: '0', // Reset margin
        padding: '4rem 1rem',
        boxSizing: 'border-box',
        position: 'relative', // Ensure positioning context
        left: '0', // Force left position
        right: '0', // Force right position
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          width: '100%',
          textAlign: 'center',
          margin: '0 auto', // Additional centering
          position: 'relative',

        }}
      >
        {/* Intro */}
        <div style={{ marginBottom: '6rem' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              position: 'relative',
              transform: 'translateZ(0)',
            }}
          >
            <h1 style={{ margin: '0 0 1rem 0', textAlign: 'center' }}>Hi, I'm Andrew Yansick</h1>
            <p style={{ margin: '0', textAlign: 'center' }}>Computer Science Student | Aspiring Software Engineer</p>
          </motion.div>
        </div>

        {/* About */}
        <section id="about" style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2>About Me</h2>
          <p>I am a senior at RIT studying CS and Math</p>
        </section>

        {/* Experience */}
        <section id="experience" style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2>Experience</h2>
          <div>...</div>
        </section>

        {/* Skills */}
        <section id="skills" style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2>Skills</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>...</ul>
        </section>

        {/* Contact */}
        <section id="contact" style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2>Contact</h2>
<p>Feel free to reach out at <a href="mailto:andrewyansick@gmail.com">andrewyansick@gmail.com</a> or find me on <a href="https://www.linkedin.com/in/andrew-yansick-ajy15/">LinkedIn</a>.</p>
        </section>
      </div>
    </div>
  );
}

export default Home;