import React, { Component } from "react";
import Cards from "../components/Cards";

class Projects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
