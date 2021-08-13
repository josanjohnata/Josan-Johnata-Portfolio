import React from "react";

function Header() {
    return (
      <div>
        <header className="header_area">
          <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <div
                  className="collapse navbar-collapse offset"
                  id="navbarSupportedContent"
                >
                  <ul className="nav navbar-nav menu_nav justify-content-center">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        Sobre
                      </a>
                    </li>
                    <li className="nav-item submenu dropdown">
                      <a
                        href="../"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Projetos
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="frontEnd.html">
                            Front End
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="backEnd.html">
                            Back End
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    );
  }

export default Header;
