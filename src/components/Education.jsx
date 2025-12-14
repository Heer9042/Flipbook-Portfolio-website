import React from 'react';

const Education = () => {
  return (
    <>
      <h1 className="title">Education</h1>
      <div className="edu-box">
        <div className="edu-content">
          <span className="year">
            <i className="bx bxs-calendar"></i>Present (2 years
            completed)
          </span>
          <h3>BCA (Bachelor of Computer Applications)</h3>
          <p>VEER NARMAD SOUTH GUJARAT UNIVERSITY</p>
        </div>
        <div className="edu-content">
          <span className="year">
            <i className="bx bxs-calendar"></i>2023
          </span>
          <h3>12th Grade - 56%</h3>
          <p>SHREE VASISHTHA VIDHYALAYA</p>
        </div>
        <div className="edu-content">
          <span className="year">
            <i className="bx bxs-calendar"></i>2021
          </span>
          <h3>10th Grade - 65%</h3>
          <p>SHREE VASISHTHA VIDHYALAYA</p>
        </div>
      </div>
    </>
  );
};

export default Education;
