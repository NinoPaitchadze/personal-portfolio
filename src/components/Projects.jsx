import { motion } from 'framer-motion';

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

export const Projects = () => {
  const project = {
    github: 'https://github.com/NinoPaitchadze/Tiny-Wonders',
    demo: '', // or null
  };
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}>
      <motion.h2 variants={fadeInUp} initial="initial" animate="animate" viewport={{ once: true }}>
        My Projects
      </motion.h2>
      <motion.div
        className="projects-grid"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}>
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url(/projects/taskmanager.png)' }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Personal Task/Project Manager</h3>
          <p>
            Full-stack project management application with authentication and team collaboration.
            Allows users to manage projects, add tasks,members and comments.
          </p>
          <div className="project-tech">
            <span className="tag">ASP.NET</span>
            <span className="tag">React</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">EF Core</span>
          </div>
          <motion.div className="project-links" variants={staggerContainer}>
            <motion.a target="_blank" href="https://github.com/NinoPaitchadze/task-manager">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a target="_blank" href="https://task-manager-nino77.vercel.app/">
              <i className="fas fa-external-link-alt"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}>
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url(/projects/tinywonders.png)' }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Tiny Wonders</h3>
          <p>
            Full-stack blog platform with real-time comments via SignalR WebSockets, JWT
            authentication with refresh tokens, role-based admin panel for article management,
            category filtering, and Cloudinary image uploads.
          </p>
          <div className="project-tech">
            <span className="tag">Next.js</span>
            <span className="tag">TypeScript</span>
            <span className="tag">SCSS</span>
            <span className="tag">ASP.NET Core</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">SignalR</span>
            <span className="tag">Figma</span>
          </div>
          <motion.div className="project-links" variants={staggerContainer}>
            <motion.a
              target="_blank"
              href="https://github.com/NinoPaitchadze/Tiny-Wonders-frontend">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a target="_blank" href="https://tiny-wonders-frontend.vercel.app/">
              <i className="fas fa-external-link-alt"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}>
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url(/projects/phoxjournal.png)' }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Phox-Journal</h3>
          <p>
            Social media app X clone using Next.js and MySQL. Allows users to login and register
            through clerk authentication, create posts, follow other users, and send real time
            notifications.
          </p>
          <div className="project-tech">
            <span className="tag">Next.js</span>
            <span className="tag">Docker</span>
            <span className="tag">Tailwind CSS</span>
          </div>
          <motion.div className="project-links" variants={staggerContainer}>
            <motion.a target="_blank" href="https://github.com/NinoPaitchadze/phox-journal">
              <i className="fab fa-github"></i>
            </motion.a>
            {project.demo && (
              <motion.a target="_blank" href={project.demo}>
                <i className="fas fa-external-link-alt"></i>
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
