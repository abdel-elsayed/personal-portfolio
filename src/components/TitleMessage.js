import React from "react";
import Typewriter from "typewriter-effect";
import "../styling/TitleMessage.css";

const TitleMessage = () => (
  <div className="titleMessage">
    <div className="main text-center">
      Hi There, I am
      <br />
      <span>
        <strong>Abdelrahman Elsayed</strong> <i class="far fa-laugh-beam"></i>
      </span>
    </div>
    <div className="sub">
      <Typewriter
        options={{
          strings: ["Future Software Engineer", "Always Learning", "Student"],
          autoStart: true,
          loop: true,
          delay: 100,
        }}
      />
    </div>
  </div>
);

export default TitleMessage;
