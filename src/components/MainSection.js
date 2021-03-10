import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styling/MainSection.css";
import TitleMessage from "./TitleMessage";

class MainSection extends Component {
  render() {
    return (
      <div>
        <div className="main-container">
          <div className="main-btns">
            <div className="social-button">
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/abdelrahman-elsayed-318539145/"
                className="button-outline"
                target="_blank"
              >
                LinkedIn <i className="fab fa-linkedin" />
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/abdel-elsayed"
                className="button-primary"
                target="_blank"
              >
                GitHub <i className="fab fa-github-alt" />
              </a>
            </div>
            <div className="resume-button">
              <a
                rel="noreferrer"
                href="https://drive.google.com/file/d/16Mpgq_HaPl9x3s_f3Ngk2Ju9rsnQIo66/view?usp=sharing"
                className="button-outline"
                target="_blank"
              >
                Web Dev Resume <i class="fas fa-laptop-code"></i>
              </a>

              <a
                rel="noreferrer"
                href="https://drive.google.com/file/d/1XvAWE3iHVBvLmvJuhU66ApDrdkiZ1MSS/view?usp=sharing"
                className="button-primary"
                target="_blank"
              >
                Software Dev Resume <i class="fas fa-terminal"></i>
              </a>
            </div>
          </div>
          <TitleMessage />
        </div>
        <div
          style={{
            marginTop: "10rem",
            textAlign: "center",
            marginBottom: "7rem",
          }}
        >
          <p className="about-text1">
            {/* <i class="far fa-laugh-beam"></i>. */}
            Computer science student at City University of New York, College of
            Staten Island. Highly motivated, passionate, and enthusiastic about
            technology, developing and creativity.
          </p>
          <Link to="/about" className="learn-more-button ">
            learn more <i className="fas fa-rocket"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainSection;
