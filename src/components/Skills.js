import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', logo: '/assets/html-logo.png' },
    { name: 'CSS', logo: '/assets/css-logo.png' },
    { name: 'Bootstrap', logo: '/assets/bootstrap-logo.png' },
    { name: 'JavaScript', logo: '/assets/javascript-logo.png' },
    { name: 'MySQL', logo: '/assets/mysql-logo.png' },
    { name: 'Python', logo: '/assets/python-logo.png' },
    { name: 'Django', logo: '/assets/django-logo.png' },
    { name: 'React', logo: '/assets/react-logo.png' },
  ];

  return (
    <section className="skills-section">
      {skills.map((skill) => (
        <div className="skill-card" key={skill.name}>
          <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
          <h3>{skill.name}</h3>
        </div>
      ))}
    </section>
  );
};

export default Skills;
