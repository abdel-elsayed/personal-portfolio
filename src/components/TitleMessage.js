import React from "react";
import Typewriter from "typewriter-effect";
import "../styling/TitleMessage.css";

const TitleMessage = () => (
  <div className="titleMessage">
    <div className="main text-center">
      Hi There, I am
      <br />
      <span>
        <strong>Abdelrahman Elsayed</strong> <i className="fas fa-rocket"></i>
      </span>
    </div>
    <div className="sub">
      <Typewriter
        options={{
          strings: [
            "iOS Software Engineer",
            "Always Learning",
            "Aspiring Web Developer",
          ],
          autoStart: true,
          loop: true,
          delay: 100,
        }}
      />

      <div className="social-button">
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/abdelrahman-elsayed-318539145/"
          className="button-primary"
          target="_blank"
        >
          LinkedIn <i className="fab fa-linkedin" />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/abdel-elsayed"
          className="button-outline"
          target="_blank"
        >
          GitHub <i className="fab fa-github-alt" />
        </a>
      </div>
      <div className="resume-button">
        <a
          rel="noopener noreferrer"
          href="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1663952357/Abdelrahman_Elsayed-2_iat0mw.png"
          className="button-primary first-two-buttons"
          target="_blank"
        >
          Resume <i className="fas fa-id-badge"></i>
        </a>
      </div>
    </div>
  </div>
);

export default TitleMessage;
