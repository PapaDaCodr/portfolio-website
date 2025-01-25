import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaGit, FaGithub, FaJs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiPycharm, SiIntellijidea, SiPostgresql, SiVisualstudiocode, SiVite, SiFirebase } from 'react-icons/si';

const TechIcon = ({ Icon, name }) => (
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="text-4xl text-[var(--primary)] mb-2" />
    <span className="text-[var(--text-secondary)]">{name}</span>
  </motion.div>
);

const TechStack = () => {
  const technologies = [
    { Icon: FaReact, name: 'React' },
    { Icon: FaNodeJs, name: 'Node.js' },
    { Icon: FaJava, name: 'Java' },
    { Icon: FaPython, name: 'Python' },
    { Icon: FaDatabase, name: 'SQL' },
    { Icon: FaJs, name: 'JavaScript' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: SiNextdotjs, name: 'Next.js' },
    { Icon: FaHtml5, name: 'HTML5' },
    { Icon: FaCss3Alt, name: 'CSS3' },
    { Icon: SiExpress, name: 'Express' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: SiPycharm, name: 'PyCharm' },
    { Icon: SiIntellijidea, name: 'IntelliJ IDEA' },
    { Icon: FaGit, name: 'Git' },
    { Icon: FaGithub, name: 'GitHub' },
    { Icon: SiPostgresql, name: 'PostgreSQL' },
    { Icon: SiVisualstudiocode, name: 'VS Code' },
    { Icon: SiVite, name: 'Vite' },
    { Icon: SiFirebase, name: 'Firebase' }
];

  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <TechIcon key={index} Icon={tech.Icon} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;