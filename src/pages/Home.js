import React from "react";
import "../App.css";
import TitleMessage from "../components/TitleMessage";
//import illust from "../assets/mirage-644.png";
import illust1 from "../assets/puzzle-programmist.png";
import "../styling/Home.css";

function Home() {
  return (
    <div className="main-container">
      <TitleMessage />
      <div className="left-container">
        <img
          alt="waving-hand-illustration"
          className="illustration "
          src={illust1}
        />
      </div>
    </div>
  );
}

export default Home;
