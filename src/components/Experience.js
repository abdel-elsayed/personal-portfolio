import React from "react";
import "../styling/Experience.css";

function Experience(props) {
  return (
    <div>
      <ul className="experience-item">
        <li style={{ marginBottom: "0rem", textDecoration: "underline" }}>
          <strong>{props.title}</strong>
        </li>
        <p
          style={{
            marginTop: "0.2rem",
            textDecoration: "underline",
            color: "#457B9D",
          }}
        >
          {props.subtitle}
        </p>
        <li>- {props.first} </li>
        <li>- {props.second} </li>
        <li>- {props.third} </li>
        <li
          style={{ marginTop: "1rem", textAlign: "center", color: "#be837d" }}
        >
          {props.date}
        </li>
      </ul>
    </div>
  );
}

export default Experience;
