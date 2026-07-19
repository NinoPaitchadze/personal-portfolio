import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}>
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate">
          <motion.div className="hero-badge">
            <span>Hello, I'm</span>
          </motion.div>
          <motion.h1 className="glitch" variants={fadeInUp} whileHover={{ scale: 1.02 }}>
            Nino Paichadze
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Full-Stack Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Junior Full-Stack Developer focused on ASP.NET Core, React, and PostgreSQL.I enjoy
            building practical web applications, designing APIs, and learning how software works
            under the hood.
          </motion.p>
          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Get In Touch
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a target="_blank" href="https://github.com/NinoPaitchadze">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a target="_blank" href="https://www.linkedin.com/in/nino-paichadze-058797220/">
              <i className="fab fa-linkedin-in"></i>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          <div className="code-display">
            <SyntaxHighlighter
              style={vscDarkPlus}
              language="csharp"
              customStyle={{
                margin: 0,
                padding: '2rem',
                height: '100%',
                borderRadius: '8px',
                backgroundColor: 'rgba(30,41,59,0.8)',
                backdropFilter: 'blur(10px)',
                marginBottom: 20,
              }}>
              {`public interface IDeveloper
{
    string Name => "Nino";
    string Role => " Full-Stack Developer";

    string[] Languages =>
        ["C#", "JavaScript", "TypeScript", "SQL"];

    string[] Backend =>
        ["ASP.NET Core", "Entity Framework Core","swagger"];

    string[] Frontend =>
        ["React", "Next.js", "Tailwind CSS"];

    string[] Databases =>
        ["PostgreSQL"];

    string[] Tools =>
        ["Docker", "Git", "Visual Studio", "Figma"];

}`}
            </SyntaxHighlighter>
          </div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
            <div className="card-content">
              <span className="card-text">Building scalable web applications</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
