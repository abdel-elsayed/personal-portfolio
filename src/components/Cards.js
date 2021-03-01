import React from "react";
import "../styling/Cards.css";
import CardItem from "./CardItem";
import ScrollAnimation from "react-animate-on-scroll";
import graphqlLogo from "../assets/graphql.png";

function Cards() {
  return (
    <div className="cards">
      <img
        alt="gif"
        className="image1"
        style={{ marginTop: "2rem" }}
        src="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1612544177/A_E_bryr1f.gif"
      />
      <h1 style={{ marginTop: "6rem", marginBottom: "4rem", color: "white" }}>
        Check out my projects
      </h1>
      <div className="downArrow bounce">
        <i className="fas fa-arrow-circle-down fa-5x"></i>
      </div>

      <div className="cards__wrapper">
        <ScrollAnimation animateIn="bounceInRight">
          <ul className="cards__items">
            <CardItem
              vidSrc="https://www.youtube.com/embed/RYkkgoIA2D4"
              text="Full-stack Social-Media Web Application using MERNG stack"
              label="Enviromania"
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
            <CardItem
              src="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1614493223/Screen_Shot_2021-02-28_at_1.19.26_AM_qpasf2.png"
              text="Full-stack recipe website using React.js, Redux, Node.js and Easybase"
              label="Amira's kitchen"
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
            <CardItem
              src="https://raw.githubusercontent.com/abdel-elsayed/Lemonade-E-Commerce-Website/master/images/bagsPageDemo.png"
              text="Full-Stack PHP E-commerce website"
              label="Lemonade E-commerce"
              tech1="fab fa-php"
              tech2="fab fa-html5"
              tech3="fab fa-css3-alt"
              tech4=""
              tech5=""
              tech6=""
              pathSource="https://github.com/abdel-elsayed/Lemonade-E-Commerce-Website"
              pathLink=""
              pathSand=""
              tags={["web-development", "PHP"]}
            />
          </ul>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInRight">
          <ul className="cards__items">
            <CardItem
              src="https://raw.githubusercontent.com/abdel-elsayed/FileCompression/main/Output/Capture1.PNG"
              text="C++ File Compression program using Huffman-code"
              label="File Compression"
              tech1=""
              tech2=""
              tech3=""
              tech4="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
              tech5=""
              tech6=""
              pathSource="https://github.com/abdel-elsayed/FileCompression"
              pathLink=""
              pathSand=""
              tags={["Algorithms", "Console", "Huffman-code"]}
            />{" "}
            <CardItem
              vidSrc="https://www.youtube.com/embed/5SRHJDLT8e4"
              text="Object-Oriented-Programming Java/JavaFX game "
              label="Maze-Runner"
              tech1="fab fa-java"
              tech2=""
              tech3=""
              tech4=""
              tech5=""
              tech6=""
              pathSource="https://github.com/abdel-elsayed/Maze-Runner"
              pathLink=""
              pathSand=""
              tags={["OOP", "GUI", "2D-Game"]}
            />
            <CardItem
              src="https://miro.medium.com/max/1400/1*sMryEXZVPKFjGNcfSzE8Mw.jpeg"
              text="Implementation of data structures and Algorithms in C++"
              label="Data structures"
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
          </ul>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInRight">
          <ul className="cards__items">
            <CardItem
              src="https://raw.githubusercontent.com/abdel-elsayed/GarageCars/master/lane1.png"
              text="C++ simulation of cars arrivals/departures in 2-lanes parking garage."
              label="Garage Cars"
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
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInRight">
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
        </ScrollAnimation>
      </div>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <a
          rel="noreferrer"
          href="https://github.com/abdel-elsayed"
          className="more-projects"
          target="_blank"
          style={{ marginTop: "20px", borderRadius: "10%" }}
        >
          More projects <i className="fab fa-github-alt" />
        </a>
      </div>
    </div>
  );
}

export default Cards;
