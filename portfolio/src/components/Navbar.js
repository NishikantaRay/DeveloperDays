import React from "react";

export default function Navbar() {
  return (
    <>
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
                    <a
                      href="/"
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
                    </a>
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
                  <a
                    className="
                
                mr-2
                nav-link
                active
                text-secondary
                mb-sm-3 mb-md-0
              "
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=" mr-2 nav-link text-secondary mb-sm-3 mb-md-0"
                    href="/"
                  >
                    About me
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className=" mr-2 nav-link text-secondary mb-sm-3 mb-md-0"
                    href="/"
                  >
                    Achievements
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=" mr-2 nav-link text-secondary mb-sm-3 mb-md-0"
                    href="/"
                  >
                    Projects
                  </a>
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
      <br />
      <br />
    </>
  );
}
