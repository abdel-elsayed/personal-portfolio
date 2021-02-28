import React from "react";
import "./About.css";
import "../styling/Contact.css";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  return (
    <div>
      <ul className="contact-container">
        <li>Email me</li>
        <li>LinkedIn</li>
        <li>GitHub</li>
      </ul>
    </div>
  );
};

export default Contact;
