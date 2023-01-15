import React from "react";
import "../styling/Cards.css";
import CardItem from "./CardItem";
import ScrollAnimation from "react-animate-on-scroll";
import {
  SiGraphql,
  SiMongodb,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiCplusplus,
  SiJava,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiHeroku,
  SiFirebase,
  SiStripe,
} from "react-icons/si";
import { Link } from "react-scroll";
import Lottie from "react-lottie";
import animationData1 from "../assets/laptop.json";

function Cards() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="cards">
      <div>
        <div className="image1">
          <Lottie options={defaultOptions} />
        </div>

        <h1
          style={{ marginTop: "6rem", marginBottom: "4rem", color: "#3b5272" }}
        >
          Check my work out
        </h1>

        <Link to="project" spy={true} className="downArrow bounce">
          <i className="fas fa-arrow-circle-down fa-3x"></i>
        </Link>
      </div>
      <div id="project"></div>
      <div className="cards__wrapper">
        <ScrollAnimation animateIn="bounceInRight" animateOnce>
          <ul className="cards__items">
            <CardItem
              cardType="cards__item"
              vidSrc="https://www.youtube.com/embed/5SRHJDLT8e4"
              text="Object-Oriented-Programming Java/JavaFX game "
              label="Maze-Runner (Desktop)"
              techs={[<SiJava size={40} color="#e63946" />]}
              pathSource="https://github.com/abdel-elsayed/Maze-Runner"
              pathLink=""
              pathSand=""
              tags={["Software Engineering", "OOP", "GUI", "2D-Game"]}
            />{" "}
            <CardItem
              cardType="cards__item"
              vidSrc="https://www.youtube.com/embed/2ymdGQBQ6Cg"
              text="Personal Portfolio Website"
              label="A_ELSAYED (Web)"
              techs={[
                <SiNodedotjs size={40} color="#e63946" />,
                <SiReact size={40} color="#e63946" />,
              ]}
              pathSource="https://github.com/abdel-elsayed/personal-portfolio"
              pathLink="https://abdelrahman-elsayed.netlify.app/"
              pathSand=""
              tags={["web-development", "Personal-Website"]}
            />
          </ul>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOnce>
          <ul className="cards__items">
            <CardItem
              cardType="cards__item"
              src="https://techkhabaren.files.wordpress.com/2012/06/zip.jpg"
              text="C++ File Compression program using Huffman-code"
              label="File Compression (Desktop)"
              techs={[<SiCplusplus size={40} color="#e63946" />]}
              pathSource="https://github.com/abdel-elsayed/FileCompression"
              pathLink=""
              pathSand=""
              tags={[
                "Software Engineering",
                "Algorithms",
                "Console",
                "Huffman-code",
              ]}
            />{" "}
            <CardItem
              cardType="cards__item"
              s
              vidSrc="https://www.youtube.com/embed/RYkkgoIA2D4"
              text="Full-stack Social-Media Web Application using MERNG stack"
              label="Enviromania (Web)"
              techs={[
                <SiGraphql size={40} color="#e63946" />,
                <SiNodedotjs size={40} color="#e63946" />,
                <SiReact size={40} color="#e63946" />,
                <SiRedux size={40} color="#e63946" />,
                <SiMongodb size={40} color="#e63946" />,
              ]}
              pathSource="https://github.com/abdel-elsayed/Cap-Stone-TTP-frontend"
              pathLink="https://enviromania.netlify.app/"
              pathSand=""
              tags={["web-development", "Full-stack"]}
            />
          </ul>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOnce>
          <ul className="cards__items">
            <CardItem
              cardType="cards__item"
              src="https://miro.medium.com/max/1400/1*sMryEXZVPKFjGNcfSzE8Mw.jpeg"
              text="Implementation of data structures and Algorithms in C++"
              label="Data structures (Desktop)"
              techs={[<SiCplusplus size={40} color="#e63946" />]}
              pathSource="https://github.com/abdel-elsayed/Data-Structures"
              pathLink=""
              pathSand=""
              tags={["Data-structures", "Algorithms", "Console"]}
            />

            <CardItem
              cardType="cards__item"
              src="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1614493223/Screen_Shot_2021-02-28_at_1.19.26_AM_qpasf2.png"
              text="Full-stack recipe website using React.js, Redux, Node.js and Easybase"
              label="Amira's kitchen (Web)"
              inProgress={true}
              techs={[
                <SiNodedotjs size={40} color="#e63946" />,
                <SiReact size={40} color="#e63946" />,
                <SiRedux size={40} color="#e63946" />,
              ]}
              pathSource="https://github.com/abdel-elsayed/amiras-kitchen"
              pathLink="https://amira-elsayed-kitchen.netlify.app/Home"
              pathSand=""
              tags={["web-development", "Serverless-CMS"]}
            />
          </ul>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOnce>
          <ul className="cards__items">
            <CardItem
              cardType="cards__item"
              src="https://raw.githubusercontent.com/abdel-elsayed/GarageCars/master/lane1.png"
              text="C++ simulation of cars arrivals/departures in 2-lanes parking garage."
              label="Garage Cars (Desktop)"
              techs={[<SiCplusplus size={40} color="#e63946" />]}
              pathSource="https://github.com/abdel-elsayed/GarageCars"
              pathLink=""
              pathSand=""
              tags={["Data-structures", "Stacks", "Console"]}
            />

            <CardItem
              cardType="cards__item"
              src="https://raw.githubusercontent.com/abdel-elsayed/Lemonade-E-Commerce-Website/master/images/bagsPageDemo.png"
              text="Full-Stack PHP E-commerce website"
              label="Lemonade E-commerce (Web)"
              techs={[
                <SiPhp size={40} color="#e63946" />,
                <SiHtml5 size={40} color="#e63946" />,
                <SiCss3 size={40} color="#e63946" />,
                <SiHeroku size={40} color="#e63946" />,
              ]}
              pathSource="https://github.com/abdel-elsayed/Lemonade-E-Commerce-Website"
              pathLink="https://lemonade-ecomm.herokuapp.com/php/FrontPage.php"
              pathSand=""
              tags={["web-development", "PHP"]}
            />
          </ul>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOnce>
          <ul className="cards__items">
            <CardItem
              cardType="cards__item"
              src="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1614629989/Screen_Shot_2021-03-01_at_3.19.06_PM_fxyhoc.png"
              text="Full-Stack clone of Amazon using fire-base and React.js"
              label="Amazon clone (Web)"
              inProgress={true}
              techs={[
                <SiFirebase size={40} color="#e63946" />,
                <SiStripe size={40} color="#e63946" />,
                <SiReact size={40} color="#e63946" />,
              ]}
              pathSource="https://github.com/abdel-elsayed/amazon-clone"
              pathLink="https://challenge-e57b8.firebaseapp.com/"
              pathSand=""
              tags={["web-development", "Clone"]}
            />{" "}
          </ul>
        </ScrollAnimation>
      </div>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <a
          rel="noopener noreferrer"
          href="https://github.com/abdel-elsayed"
          className="more-projects"
          target="_blank"
        >
          More projects <i className="fab fa-github-alt" />
        </a>{" "}
        <button
          className="bounce button-up"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <i className="fas fa-sort-up fa-5x"></i>
        </button>
      </div>
    </div>
  );
}

export default Cards;
