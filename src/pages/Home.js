import React from "react";
import "../App.css";
import TitleMessage from "../components/TitleMessage";
import "../styling/Home.css";
import Lottie from "react-lottie";
import animationData1 from "../assets/boyWithPlant1.json";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="main-container">
      <TitleMessage />
      <div className="left-container">
        <div className="illustration">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </div>
  );
}

export default Home;
