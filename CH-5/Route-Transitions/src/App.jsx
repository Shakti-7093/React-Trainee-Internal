import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";

const App = () => {

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade-exit-active" timeout={300}>
                  <Home />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/about"
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={300}>
                  <About />
                </CSSTransition>
              </TransitionGroup>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
