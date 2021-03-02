import React from "react";
import "../styling/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div class="social-media-wrap">
        <a
          href="mailto:abdel.elsayed18@gmail.com"
          rel="noopener noreferrer"
          class="social-icon-link"
          target="_blank"
          aria-label="mail"
        >
          <i class="far fa-envelope"></i>
        </a>
        <a
          rel="noreferrer"
          class="social-icon-link"
          href="https://www.youtube.com/channel/UCch1FgoG7eS1NeVbgVWTfyQ/videos"
          target="_blank"
          aria-label="Youtube"
        >
          <i class="fab fa-youtube" />
        </a>
        <a
          rel="noreferrer"
          class="social-icon-link"
          href="https://www.linkedin.com/in/abdelrahman-elsayed-318539145/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          rel="noreferrer"
          class="social-icon-link"
          href="https://github.com/abdel-elsayed"
          target="_blank"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          rel="noreferrer"
          class="social-icon-link"
          href="https://drive.google.com/file/d/1A6YvFwHVjHMVO8Jmz0riSVWmYl-SORfj/view?usp=sharing"
          target="_blank"
          aria-label="GitHub"
        >
          <i class="fas fa-id-badge"></i>
        </a>
      </div>
      <div style={{ paddingTop: "2rem" }}>
        <small class="website-rights">A_ELSAYED © 2021</small>
      </div>
    </div>
  );
}

export default Footer;
