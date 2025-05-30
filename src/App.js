import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Certificates from "./pages/Certificates";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route
          render={({ location }) => (
            <TransitionGroup className="RTG">
              <CSSTransition key={location.key} timeout={500} classNames="fade">
                <div className="content-wrapper">
                  <Switch location={location}>
                    <Route
                      exact
                      path="/Home"
                      className="Home"
                      component={Home}
                    />
                    <Route
                      exact
                      path="/About"
                      className="About"
                      component={About}
                    />
                    <Route
                      exact
                      path="/Certificates"
                      className="Certificates"
                      component={Certificates}
                    />
                    <Route exact path="/Projects" 
                    component={Projects} 
                    />
                    <Route exact path="/">
                      <Redirect to="/Home" />
                    </Route>
                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
