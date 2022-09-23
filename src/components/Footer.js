import React from "react";
import "../styling/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-media-wrap">
        <a
          href="mailto:abdel.elsayed18@gmail.com"
          rel="noopener noreferrer"
          className="social-icon-link"
          target="_blank"
          aria-label="mail"
        >
          <i className="far fa-envelope"></i>
        </a>
        <a
          rel="noopener noreferrer"
          className="social-icon-link"
          href="https://www.youtube.com/channel/UCch1FgoG7eS1NeVbgVWTfyQ/videos"
          target="_blank"
          aria-label="Youtube"
        >
          <i className="fab fa-youtube" />
        </a>
        <a
          rel="noopener noreferrer"
          className="social-icon-link"
          href="https://www.linkedin.com/in/abdelrahman-elsayed-318539145/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          rel="noopener noreferrer"
          className="social-icon-link"
          href="https://github.com/abdel-elsayed"
          target="_blank"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          rel="noopener noreferrer"
          className="social-icon-link"
          href="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1663952357/Abdelrahman_Elsayed-2_iat0mw.png"
          target="_blank"
          aria-label="resume"
        >
          <i className="fas fa-id-badge"></i>
        </a>
      </div>
      <div style={{ paddingTop: "2rem" }}>
        <small className="website-rights">A_ELSAYED © 2021</small>
      </div>
    </div>
  );
}

export default Footer;
