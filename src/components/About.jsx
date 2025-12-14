import React from 'react';

const About = () => {
  return (
    <>
      <h1 className="title">About Me</h1>
      <div className="edu-box">
        <div className="edu-content">
          <h3>👋 Introduction</h3>
          <p>
            Hello! I'm Heer Patel, a dedicated and hardworking BCA
            student seeking opportunities to gain practical
            experience and apply my academic knowledge in real-world
            settings.
          </p>
        </div>
        <div className="edu-content">
          <h3>🎯 What I Do</h3>
          <p>
            I specialize in web development, cybersecurity, and
            creating innovative solutions using modern technologies
            like React, Python, and full-stack development.
          </p>
        </div>
        <div className="edu-content">
          <h3>💡 My Passion</h3>
          <p>
            Enthusiastic about contributing to teams, developing new
            skills, and solving complex problems through code. I
            believe in continuous learning and adaptability.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
