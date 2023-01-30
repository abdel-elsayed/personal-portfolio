import React from "react";
import Typewriter from "typewriter-effect";
import gitHubLogo from "../assets/github.png";
import linkedInLogo from "../assets/linkedin.png";
import rocket from "../assets/rocket.png";
import resumeLogo from "../assets/resume.png";
import "../styling/TitleMessage.css";

const TitleMessage = () => (
  <div className="titleMessage">
    <div className="main text-center">
      Hello, my name is
      <br />
      <span>
        <strong>Abdelrahman Elsayed</strong>{" "}
        <img src={rocket} style={{ width: "1.2em" }} alt="astro icon" />
      </span>
    </div>
    <div className="sub">
      <Typewriter
        options={{
          strings: [
            "iOS Mobile Developer",
            "Loves web development",
            "Always Learning",
          ],
          autoStart: true,
          loop: true,
          delay: 100,
        }}
      />

      <div className="social-button">
        <a
          rel="noopener noreferrer"
          href="https://github.com/abdel-elsayed"
          className="logo-image"
          target="_blank"
        >
          <img
            src={gitHubLogo}
            style={{ width: "2em" }}
            alt="gitHub logo"
          ></img>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/16tCz0IvO8DlLGt7PZdcKdu17-i7RRHsR/view?usp=share_link"
          className="logo-image"
          target="_blank"
        >
          <img
            src={resumeLogo}
            style={{ width: "2em", margin: "0em 1rem" }}
            alt="gitHub logo"
          ></img>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/abdelrahman-elsayed-318539145/"
          className="logo-image"
          target="_blank"
        >
          <img
            src={linkedInLogo}
            style={{ width: "2em" }}
            alt="gitHub logo"
          ></img>
        </a>
      </div>
    </div>
  </div>
);

export default TitleMessage;
