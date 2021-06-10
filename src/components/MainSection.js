import React, { Component } from "react";
import illust from "../assets/mirage-644.png";
import "../App.css";
import "../styling/MainSection.css";
import TitleMessage from "./TitleMessage";

class MainSection extends Component {
  render() {
    return (
      <div className="main-container">
        <TitleMessage />
        <div className="left-container">
          <img
            alt="waving-hand-illustration"
            className="illustration spin"
            src={illust}
          />
          <div className="resume-button">
            <a
              rel="noreferrer"
              href="https://drive.google.com/file/d/16Mpgq_HaPl9x3s_f3Ngk2Ju9rsnQIo66/view?usp=sharing"
              className="button-primary first-two-buttons"
              target="_blank"
            >
              Web Dev Resume <i class="fas fa-laptop-code"></i>
            </a>

            <a
              rel="noreferrer"
              href="https://drive.google.com/file/d/1XvAWE3iHVBvLmvJuhU66ApDrdkiZ1MSS/view?usp=sharing"
              className="button-outline first-two-buttons"
              target="_blank"
            >
              Software Dev Resume <i class="fas fa-terminal"></i>
            </a>
          </div>
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
          {/* <div className="social-button">
            <Link to="/about" className="button-outline learn-more-button">
              learn more <i className="fas fa-rocket"></i>
            </Link>
          </div> */}
        </div>
      </div>
    );
  }
}

export default MainSection;
