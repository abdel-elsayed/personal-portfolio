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
       <a href={props.url} target="_blank">  <button>
              {" "}
              <img
                alt="logo"
                className="company-logo"
                src={props.company_logo}
              />
            </button></a>
          </li>
        </ul>
        <li>- {props.first} </li>
        <li>- {props.second} </li>
        {props.third ? <li>- {props.third} </li> : null}
        {props.fourth ? <li>- {props.fourth} </li> : null}
        {props.fifth ? <li>- {props.fifth} </li> : null}
        <li className="experience-date">{props.date}</li>
      </ul>
    </div>
  );
}

export default Experience;
