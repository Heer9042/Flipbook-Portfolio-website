import React from 'react';

const Skills = () => {
  return (
    <>
      <h1 className="title">💼 Skills & Services</h1>
      <div className="skill-box">
        <div className="skill-content">
          <h3>🗣️ Languages</h3>
          <div className="content">
            <span>English</span>
            <span>Gujarati</span>
            <span>Hindi</span>
          </div>
        </div>
        <div className="skill-content">
          <h3>📜 Certificates</h3>
          <div className="content">
            <span>Cybersecurity Fundamentals</span>
            <span>ChatGPT Bootcamp</span>
            <span>Network Security</span>
            <span>Introduction to Cybersecurity</span>
            <span>Network Basics</span>
          </div>
        </div>
        <div className="skill-content">
          <h3>🎯 Core Skills</h3>
          <div className="content">
            <span>Technical Skills</span>
            <span>Communication</span>
            <span>Teamwork</span>
            <span>Problem Solving</span>
            <span>Self-learning</span>
            <span>Adaptability</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
