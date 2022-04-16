import React from "react";
import "../App.css";
import TitleMessage from "../components/TitleMessage";
//import illust from "../assets/mirage-644.png";
// import illust1 from "../assets/Illust1.png";
// import illust3 from "../assets/illust3.gif";
import "../styling/Home.css";
import Lottie from "react-lottie";
// import animationData from "../assets/animationData.json"
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
