import React, { useEffect } from "react";
import "../styling/About.css";
import "../styling/Cards.css";
// import Skills from "../components/Skills";
// import Experience from "../components/Experience";
// import ScrollAnimation from "react-animate-on-scroll";
// import { Link } from "react-scroll";
import Lottie from 'react-lottie';
// import animationData from "../assets/animationData.json"
import animationData1 from "../assets/underConstruction.json"

function Certificates() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
    useEffect(() => {
      window.scrollTo(0, 0);
    });
    return (
      
      <div
        style={{
          padding: "0 0",
        }}
      > 
       <div className="upper-view1">
       <div  className="image1">
              <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
              />
            </div>
        </div>
    </div>
    );
  }
  
  export default Certificates;
  