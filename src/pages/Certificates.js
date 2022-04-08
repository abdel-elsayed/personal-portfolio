import React, { useEffect } from "react";
import "../styling/About.css";
import "../styling/Cards.css";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-scroll";

function Certificates() {
    useEffect(() => {
      window.scrollTo(0, 0);
    });
    return (
      <div
        style={{
          padding: "0 0",
        }}
      > 
       <div className="upper-view">
            <p className="header-text">Aspiring Software Engineer</p>
            <p className="second-header-text">
              <strong>
                Based in NYC,
                <br /> I develop software and stuff like that.
              </strong>
            </p>
            <p className="about-paragraph">
              Constantly learning and exploring new skills. Passionate about
              science, creativity, and new technologies and what problems can
              they solve plus how can I use them to build better and scalable
              products.
            </p>
        </div>
    </div>
    );
  }
  
  export default Certificates;
  