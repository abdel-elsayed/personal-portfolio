import React from "react";
import Typewriter from "typewriter-effect";
import "../styling/TitleMessage.css";

const TitleMessage = () => (
  <div className="titleMessage">
    <div className="main text-center">
      Hi There, I am
      <br />
      <span>
        <strong>Abdelrahman Elsayed</strong> <i class="fas fa-rocket"></i>
      </span>
    </div>
    <div className="sub">
      <Typewriter
        options={{
          strings: ["Aspiring Software Engineer", "Always Learning", "Student"],
          autoStart: true,
          loop: true,
          delay: 100,
        }}
      />

      <div className="social-button">
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/abdelrahman-elsayed-318539145/"
          className="button-primary"
          target="_blank"
        >
          LinkedIn <i className="fab fa-linkedin" />
        </a>
        <a
          rel="noreferrer"
          href="https://github.com/abdel-elsayed"
          className="button-outline"
          target="_blank"
        >
          GitHub <i className="fab fa-github-alt" />
        </a>
      </div>
      <div className="resume-button">
        <a
          rel="noreferrer"
          href="https://drive.google.com/file/d/1Tm6mSoADrMrzT9blOVECJP3UoIzuVkjJ/view"
          className="button-primary first-two-buttons"
          target="_blank"
        >
          Resume <i class="fas fa-id-badge"></i>
        </a>

        {/* <a
            rel="noreferrer"
            href="https://drive.google.com/file/d/1XvAWE3iHVBvLmvJuhU66ApDrdkiZ1MSS/view?usp=sharing"
            className="button-outline first-two-buttons"
            target="_blank"
          >
            Software Dev Resume <i class="fas fa-terminal"></i>
          </a> */}
      </div>
    </div>
  </div>
);

export default TitleMessage;
