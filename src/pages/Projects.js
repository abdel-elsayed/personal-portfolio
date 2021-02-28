import React, { Component } from "react";
import Cards from "../components/Cards";

class Projects extends Component {
  render() {
    return (
      <div
        style={{
          background: "linear-gradient(90deg, #141E30 0%, #243B55 100%)",
        }}
      >
        <Cards />
      </div>
    );
  }
}

export default Projects;
