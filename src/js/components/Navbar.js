import React, { Component } from 'react';
import {
  ReactRouter as Router,
  NavLink,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import { Consumer } from './Context';

class Navbar extends Component {
  constructor() {
    super();
    this.state = { theme: false };
  }
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">
                Goodreads Search and Report
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink exact className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/my-account">
                      My Account
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  onClick={(e) => {
                    value.toggleTheme();
                  }}
                  type="button"
                  className="btn btn-primary"
                >
                  Toggle theme
                </button>
              </div>
            </nav>
          );
        }}
      </Consumer>
    );
  }
}

export default Navbar;
