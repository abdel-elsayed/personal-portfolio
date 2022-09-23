import React from "react";
import {
  SiFirebase,
  SiHeroku,
  SiNetlify,
  SiBitbucket,
  SiGit,
  SiGithub,
  SiMongodb,
  SiMysql,
  SiReact,
  SiRedux,
  SiHtml5,
  SiSwift,
  SiJava,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";
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
      animateOnce
      className="skills__wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldShowActions ? 1 : 0 }}
      transition={{ opacity: { duration: 2 } }}
    >
      <h2 style={{ color: "#1d3557" }}>Skills</h2>
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
              <SiSwift size={50} color="#dd501d" />
            </li>
            <li className="skill">
              <SiJava size={50} color="#dd501d" />
            </li>
            <li className="skill">
              <SiJavascript size={50} color="#dd501d" />
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
              <SiHtml5 size={50} color="#dd501d" />
            </li>
            <li className="skill">
              <SiReact size={50} color="#dd501d" />
            </li>
            <li className="skill">
              <SiRedux size={50} color="#dd501d" />
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
            }}
          >
            <li className="skill">
              <SiExpress size={50} color="#dd501d" />
            </li>
            <li className="skill">
              <SiFirebase size={50} color="#dd501d" />
            </li>
            <li className="skill">
              <SiNodedotjs size={50} color="#dd501d" />
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
              <SiHeroku size={50} color="#dd501d" />
            </li>
            <li className="skill">
              <SiFirebase size={50} color="#dd501d" />
            </li>
            <li className="skill">
              <SiNetlify size={50} color="#dd501d" />
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
              <SiBitbucket size={50} color="#dd501d" />
            </li>
            <li className="skill">
              <SiGit size={50} color="#dd501d" />
            </li>
            <li className="skill">
              <SiGithub size={50} color="#dd501d" />
            </li>
          </ul>
        </div>
        <div className="skills-card">
          <h3> Databases</h3>
          <ul
            style={{
              textAlign: "center",
              listStyleType: "none",
              padding: ".1rem",
              marginTop: "0.2rem",
            }}
          >
            <li className="skill">
              {/* <img
                alt="express"
                src="https://img.icons8.com/color/48/000000/firebase.png"
              /> */}
              <SiFirebase size={50} color="#dd501d" />
            </li>
            <li className="skill">
              <SiMongodb size={50} color="#dd501d" />
            </li>
            <li className="skill">
              <SiMysql size={50} color="#dd501d" />
            </li>
          </ul>
        </div>
      </ul>
    </ScrollAnimation>
  );
}

export default Skills;
