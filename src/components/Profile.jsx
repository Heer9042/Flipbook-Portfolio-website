import React from 'react';

const Profile = ({ handleContactMe }) => {
  return (
    <div className="profile-page">
      <img src="/my_pic.png" alt="Heer Patel" />
      <h1>HEER PATEL</h1>
      <h3>BCA Student & Developer</h3>

      <div className="social-media">
        <a
          href="https://heerprotfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://heerprotfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://heerprotfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-youtube"></i>
        </a>
        <a
          href="https://heerprotfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-twitter"></i>
        </a>
        <a
          href="https://heerprotfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-instagram"></i>
        </a>
      </div>

      <h2
        style={{
          marginTop: '1rem',
          marginBottom: '0.6rem',
          color: 'var(--main-color)',
          fontSize: '1.5rem',
        }}
      >
        📖 Index
      </h2>
      <div
        className="index-box"
        style={{ textAlign: 'left', width: '100%' }}
      >
        <div
          style={{
            marginBottom: '0.4rem',
            padding: '0.3rem 0',
            borderBottom: '1px solid #ddd',
          }}
        >
          <span style={{ fontWeight: 600 }}>Page 1:</span> About Me
        </div>
        <div
          style={{
            marginBottom: '0.4rem',
            padding: '0.3rem 0',
            borderBottom: '1px solid #ddd',
          }}
        >
          <span style={{ fontWeight: 600 }}>Page 2:</span> Education
        </div>
        <div
          style={{
            marginBottom: '0.4rem',
            padding: '0.3rem 0',
            borderBottom: '1px solid #ddd',
          }}
        >
          <span style={{ fontWeight: 600 }}>Page 3-5:</span> Projects
        </div>
        <div
          style={{
            marginBottom: '0.4rem',
            padding: '0.3rem 0',
            borderBottom: '1px solid #ddd',
          }}
        >
          <span style={{ fontWeight: 600 }}>Page 6:</span> Skills & Services
        </div>
        <div
          style={{
            marginBottom: '0.4rem',
            padding: '0.3rem 0',
            borderBottom: '1px solid #ddd',
          }}
        >
          <span style={{ fontWeight: 600 }}>Page 7:</span> Contact Me
        </div>
      </div>

      <div className="btn-box">
        <a href="/CV Resume.pdf" className="btn">
          Download CV
        </a>
        <button className="btn contact-me" onClick={handleContactMe}>
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Profile;
