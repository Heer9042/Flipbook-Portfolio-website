import React from 'react';

const Contact = ({ handleBackProfile }) => {
  return (
    <>
      <h1 className="title">📬 Contact Me!</h1>
      <div className="contact-box">
        <form action="" method="POST">
          <input
            type="text"
            className="field"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            className="field"
            placeholder="Email"
            required
          />
          <textarea
            name=" "
            id=""
            cols="30"
            rows="10"
            className="field"
            placeholder="Your Message"
          ></textarea>
          <input
            type="submit"
            className="btn"
            value="Send Message"
          />
        </form>
        <div
          className="contact-info"
          style={{ marginTop: '1rem', textAlign: 'center' }}
        >
          <p>
            <i className="bx bx-envelope"></i> heerpatel2036@gmail.com
          </p>
          <p>
            <i className="bx bx-phone"></i> +91 9662169042
          </p>
          <p>
            <i className="bx bx-map"></i> Sampura, Kamrej, Surat,
            Gujarat, 394330
          </p>
        </div>
      </div>
      <button
        className="back-profile"
        onClick={handleBackProfile}
      >
        <p>Profile</p>
        <i className="bx bxs-user"></i>
      </button>
    </>
  );
};

export default Contact;
