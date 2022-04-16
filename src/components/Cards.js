import React from "react";
import "../styling/Cards.css";
import CardItem from "./CardItem";
import ScrollAnimation from "react-animate-on-scroll";
import graphqlLogo from "../assets/graphql.png";
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
              tech1="fab fa-java"
              tech2=""
              tech3=""
              tech4=""
              tech5=""
              tech6="https://static.wixstatic.com/media/2724b2_a4c660815dde4271be00cb7e9b9cae2c~mv2.png/v1/fit/w_605%2Ch_533%2Cal_c/file.png"
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
              tech1="fab fa-node"
              tech2="fab fa-react"
              tech3=""
              tech4=""
              tech5=""
              tech6=""
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
              tech1=""
              tech2=""
              tech3=""
              tech4="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
              tech5=""
              tech6=""
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
              tech1="fab fa-node"
              tech2="fab fa-react"
              tech3=""
              tech4="https://img.icons8.com/ios-filled/50/000000/redux.png"
              tech5="https://img.icons8.com/color/48/000000/mongodb.png"
              tech6={graphqlLogo}
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
              tech1=""
              tech2=""
              tech3=""
              tech4="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
              tech5=""
              tech6=""
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
              tech1="fab fa-node"
              tech2="fab fa-react"
              tech3=""
              tech4="https://img.icons8.com/ios-filled/50/000000/redux.png"
              tech5=""
              tech6="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/yyubzwgfnriz10qbj4a6"
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
              tech1=""
              tech2=""
              tech3=""
              tech4="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
              tech5=""
              tech6=""
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
              tech1="fab fa-php"
              tech2="fab fa-html5"
              tech3="fab fa-css3-alt"
              tech4="https://img.icons8.com/nolan/64/heroku.png"
              tech5=""
              tech6=""
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
              tech1=""
              tech2=""
              tech3=""
              tech4="https://img.icons8.com/color/48/000000/firebase.png"
              tech5="https://img.icons8.com/nolan/64/stripe.png"
              tech6="https://img.icons8.com/plasticine/100/000000/react.png"
              pathSource="https://github.com/abdel-elsayed/amazon-clone"
              pathLink="https://challenge-e57b8.firebaseapp.com/"
              pathSand=""
              tags={["web-development", "Clone"]}
            />{" "}
          </ul>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="bounceInRight">
          <ul className="cards__items">
            <CardItem
              src="https://raw.githubusercontent.com/abdel-elsayed/React-Redux-Bank/master/HOME.png"
              text="Web Application using React/redux"
              label="Bank of React/Redux"
              tech1="fab fa-js-square"
              tech2="fab fa-react"
              tech3="fab fa-node"
              tech4="https://img.icons8.com/ios-filled/50/000000/redux.png"
              tech5=""
              tech6=""
              pathSource="https://github.com/abdel-elsayed/React-Redux-Bank"
              pathLink="https://abdels-bank-of-react-redux.netlify.app/"
              pathSand="https://codesandbox.io/s/objective-dream-dzj9k"
              tags={["web-development", "react/redux"]}
            />
            <CardItem
              src="https://raw.githubusercontent.com/abdel-elsayed/React-Pomodoro-Clock/master/pomodoro-clock.png"
              text="ReactJS web Application for Talent Tech Pipeline residency"
              label="Pomodoro Clock"
              tech1="fab fa-js-square"
              tech2="fab fa-react"
              tech3="fab fa-node"
              tech4=""
              tech5=""
              tech6=""
              pathSource="https://github.com/abdel-elsayed/React-Pomodoro-Clock"
              pathLink="https://abdels-react-pomodoro-timer.netlify.app"
              pathSand=""
              tags={["web-development", "react"]}
            />
          </ul>
        </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="bounceInRight">
          <ul className="cards__items">
            <CardItem
              src="https://raw.githubusercontent.com/abdel-elsayed/React-Giphy-App/master/Screen%20Shot%202021-01-14%20at%209.39.33%20PM.png"
              text="Group project Web application using ReactJS"
              label="Giphy App"
              tech1="fab fa-js-square"
              tech2="fab fa-react"
              tech3=""
              tech4=""
              tech5=""
              tech6=""
              pathSource="https://github.com/abdel-elsayed/React-Giphy-App"
              pathLink=""
              pathSand="https://codesandbox.io/s/wonderful-cookies-2woz0?file=/src/components/App.js"
              tags={["web-development", "react", "API"]}
            />{" "}
          </ul>
        </ScrollAnimation> */}
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
