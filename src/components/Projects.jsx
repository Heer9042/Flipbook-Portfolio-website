import React from 'react';

const Projects = ({ page }) => {
  return (
    <>
      <h1 className="title">🚀 Personal Projects</h1>
      <div className="edu-box">
        {page === 1 && (
          <>
            <div className="edu-content">
              <h3>💼 Pos-System-in-react</h3>
              <p>
                A comprehensive point-of-sale system built with React.js
                and backend integration for inventory management and sales
                tracking.
              </p>
            </div>
            <div className="edu-content">
              <h3>🏊 water-park-booking-system</h3>
              <p>
                An online booking platform for water park tickets and
                activities with real-time availability and payment
                integration.
              </p>
            </div>
            <div className="edu-content">
              <h3>🖼️ ImageHub</h3>
              <p>
                A PHP-based application for managing, organizing, and
                sharing images with user authentication and cloud storage.
              </p>
            </div>
          </>
        )}
        {page === 2 && (
          <>
            <div className="edu-content">
              <h3>📧 Email-Automation</h3>
              <p>
                Automated email system for bulk sending, scheduling, and
                tracking using Python and SMTP protocols.
              </p>
            </div>
            <div className="edu-content">
              <h3>📱 Track-Phone-Number-Location</h3>
              <p>
                A Python tool leveraging APIs to track and display phone
                number location information on interactive maps.
              </p>
            </div>
            <div className="edu-content">
              <h3>🔐 OTP_Verification</h3>
              <p>
                Secure OTP verification system with SMS integration for
                authentication and security purposes.
              </p>
            </div>
            <div className="edu-content">
              <h3>📊 Student-Result-Analysis</h3>
              <p>
                Data analysis tool for processing and visualizing student
                academic performance with Python and pandas.
              </p>
            </div>
            <div className="edu-content">
              <h3>👤 FACE_RECOGNITION</h3>
              <p>
                Computer vision project implementing facial recognition
                using OpenCV and machine learning algorithms.
              </p>
            </div>
          </>
        )}
        {page === 3 && (
          <>
            <div className="edu-content">
              <h3>🤝 Skill-Swap</h3>
              <p>
                An innovative platform connecting users to exchange skills
                and services, fostering community learning and
                collaboration.
              </p>
            </div>
            <div className="edu-content">
              <h3>📺 netflix-clone</h3>
              <p>
                A pixel-perfect clone of the Netflix user interface
                showcasing responsive design and dynamic content loading.
              </p>
            </div>
            <div className="edu-content">
              <h3>🧩 sudoku-solver</h3>
              <p>
                An intelligent Sudoku solver implemented in Python using
                backtracking algorithms for efficient puzzle solving.
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Projects;
