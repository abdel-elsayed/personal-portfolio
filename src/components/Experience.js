import React from "react";
import "../styling/Experience.css";

function Experience(props) {
  return (
    <div>
      <ul className="experience-item">
        <ul style={{ listStyle: "none", display: "flex" }}>
          <li>
            <strong>{props.title}</strong>
            <p className="experience-subtitle">{props.subtitle}</p>
          </li>
          <li
            style={{
              marginLeft: "auto",
            }}
          >
            <button>
              {" "}
              <img
                alt="logo"
                className="company-logo"
                src={props.company_logo}
              />
            </button>
          </li>
        </ul>

        <li>- {props.first} </li>
        <li>- {props.second} </li>
        <li>- {props.third} </li>
        {props.fourth ? <li>- {props.fourth} </li> : null}
        <li className="experience-date">{props.date}</li>
      </ul>
    </div>
  );
}

export default Experience;
