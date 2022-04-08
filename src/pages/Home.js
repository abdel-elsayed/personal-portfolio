import React from "react";
import "../App.css";
import TitleMessage from "../components/TitleMessage";
//import illust from "../assets/mirage-644.png";
import illust1 from "../assets/Illust1.png";
import illust3 from "../assets/illust3.gif";
import "../styling/Home.css";

function Home() {
  return (
    <div className="main-container">
      <TitleMessage />
      <div className="left-container">
        <img
          alt="waving-hand-illustration"
          className="illustration"
          src={illust3}
        />
      </div>
    </div>
  );
}

export default Home;
