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
            <a
              rel="noreferrer"
              href="https://drive.google.com/file/d/1A6YvFwHVjHMVO8Jmz0riSVWmYl-SORfj/view?usp=sharing"
              className="button-outline resume"
              target="_blank"
            >
              Resume <i class="fas fa-id-badge"></i>
            </a>
          </div>
          <TitleMessage />
        </div>
        <div style={{ textAlign: "center", marginBottom: "7rem" }}>
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
