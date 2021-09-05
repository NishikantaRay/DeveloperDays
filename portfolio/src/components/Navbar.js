import React from "react";
import About from "./About";
import Projects from './Projects'
import Achieve from './Achieve'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Navbar() {
  return (
    <>
    <Router>
      <header className="header-global">
        <nav
          id="navbar-main"
          aria-label="Primary navigation"
          className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light"
        >
          <div className="container position-relative">
            <a
              className="
          navbar-brand
          shadow-soft
          py-2
          px-3
          rounded
          border border-light
          mr-lg-4
        "
              href="/"
            >
              NR
            </a>
            <div className="navbar-collapse collapse" id="navbar_global">
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <Link
                      to="/"
                      className="
                  navbar-brand
                  shadow-soft
                  py-2
                  px-3
                  rounded
                  border border-light
                "
                    >
                      NR
                    </Link>
                  </div>
                  <div className="col-6 collapse-close">
                    <a
                      href="#navbar_global"
                      className="fas fa-times"
                      data-toggle="collapse"
                      data-target="#navbar_global"
                      aria-controls="navbar_global"
                      aria-expanded="false"
                      title="close"
                      aria-label="Toggle navigation"
                    >
                      .
                    </a>
                  </div>
                </div>
              </div>

              <ul className="navbar-nav navbar-nav-hover ml-auto d-flex ">
                <li className="nav-item">
                <Link className=" mr-2 nav-link text-secondary mb-sm-3 mb-md-0" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                    <Link className=" mr-2 nav-link text-secondary mb-sm-3 mb-md-0" to="/about">
                    About me</Link>
                </li>

                <li className="nav-item">
                <Link className=" mr-2 nav-link text-secondary mb-sm-3 mb-md-0" to="/Achieve">
                    Achievements
                  </Link>
                </li>
                <li className="nav-item">
                <Link className=" mr-2 nav-link text-secondary mb-sm-3 mb-md-0" to="/projects">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div className="d-flex ">
              <button
                className="navbar-toggler ml-2"
                type="button"
                data-toggle="collapse"
                data-target="#navbar_global"
                aria-controls="navbar_global"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/Achieve">
            <Achieve/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <br />
      <br />
    </>
  );
}
