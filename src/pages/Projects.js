import React, { Component } from "react";
import Cards from "../components/Cards";

class Projects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Cards />
      </div>
    );
  }
}

export default Projects;
