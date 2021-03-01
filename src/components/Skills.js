import React from "react";
import "../styling/Skills.css";

import ScrollAnimation from "react-animate-on-scroll";

function Skills(props) {
  const [lastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingDn = yPos >= lastYPos;

      setShouldShowActions(isScrollingDn);
      //setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);
  return (
    <ScrollAnimation
      animateIn="bounceInLeft"
      animateOut="bounceOutRight"
      className="skills__wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldShowActions ? 1 : 0 }}
      transition={{ opacity: { duration: 2 } }}
    >
      <h2>Skills</h2>
      <ul className="skills-view">
        <div className="skills-card">
          <h3> Programming languages</h3>
          <ul
            style={{
              textAlign: "center",
              listStyleType: "none",
              padding: ".1rem",
              marginTop: "0.2rem",
            }}
          >
            <li className="skill">
              <img
                alt="C++"
                src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
              />
            </li>
            <li className="skill">
              <img
                alt="PHP"
                src="https://img.icons8.com/dusk/64/000000/php-logo.png"
              />
            </li>
            <li className="skill">
              <img
                alt="JAVA"
                src="https://img.icons8.com/dusk/64/000000/java-coffee-cup-logo.png"
              />
            </li>
            <li className="skill">
              <img
                alt="JS"
                src="https://img.icons8.com/wired/64/000000/javascript-logo.png"
              />
            </li>
          </ul>
        </div>
        <div className="skills-card">
          <h3> Frontend</h3>
          <ul
            style={{
              textAlign: "center",
              listStyleType: "none",
              padding: ".1rem",
              marginTop: "0.2rem",
            }}
          >
            <li className="skill">
              <img
                alt="CSS"
                src="https://img.icons8.com/dusk/64/000000/css3.png"
              />
            </li>
            <li className="skill">
              <img
                alt="html"
                src="https://img.icons8.com/dusk/64/000000/html-5.png"
              />
            </li>
            <li className="skill">
              <img
                alt="react"
                src="https://img.icons8.com/nolan/96/react-native.png"
              />
            </li>
            <li className="skill">
              <img
                alt="redux"
                src="https://img.icons8.com/color/48/000000/redux.png"
              />
            </li>
          </ul>
        </div>
        <div className="skills-card">
          <h3> Backend</h3>
          <ul
            style={{
              textAlign: "center",
              listStyleType: "none",
              padding: ".1rem",
              marginTop: "0.2rem",
            }}
          >
            <li className="skill">
              <img
                alt="node"
                src="https://img.icons8.com/color/96/000000/nodejs.png"
              />
            </li>
            <li className="skill">
              <img
                alt="express"
                src="https://www.resourcifi.com/wp-content/themes/resourcifi-child/img/express-min.png"
              />
            </li>
          </ul>
        </div>
      </ul>
      <ul className="skills-view">
        <div className="skills-card">
          <h3> Hosting Platforms</h3>
          <ul
            style={{
              textAlign: "center",
              listStyleType: "none",
              padding: ".1rem",
              marginTop: "0.2rem",
            }}
          >
            <li className="skill">
              <img
                alt="heroku"
                src="https://img.icons8.com/nolan/64/heroku.png"
              />
            </li>
            <li className="skill">
              <img
                alt="netlify"
                src="https://camo.githubusercontent.com/a04f5c94c1ca51dce8845aa83b4237d487a4291441178c1b8aa34cfeb8d408bb/68747470733a2f2f696d616765732e6f70656e636f6c6c6563746976652e636f6d2f6e65746c6966792f343038376465322f6c6f676f2f3235362e706e67"
                width="80"
              />
            </li>
          </ul>
        </div>

        <div className="skills-card">
          <h3> Version Control</h3>
          <ul
            style={{
              textAlign: "center",
              listStyleType: "none",
              padding: ".1rem",
              marginTop: "0.2rem",
            }}
          >
            <li className="skill">
              <img
                alt="git"
                src="https://img.icons8.com/color/96/000000/git.png"
              />
            </li>
            <li className="skill">
              <img
                alt="Github"
                src="https://img.icons8.com/nolan/64/github.png"
              />
            </li>
          </ul>
        </div>
        <div className="skills-card">
          <h3> Databses</h3>
          <ul
            style={{
              textAlign: "center",
              listStyleType: "none",
              padding: ".1rem",
              marginTop: "0.2rem",
            }}
          >
            <li className="skill">
              <img
                alt="mongoodb"
                src="https://img.icons8.com/color/48/000000/mongodb.png"
              />
            </li>
            <li className="skill">
              <img
                alt="mysql"
                src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png"
                width="120"
              />
            </li>
          </ul>
        </div>
      </ul>
    </ScrollAnimation>
  );
}

export default Skills;
