import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <div
                  class="collapse navbar-collapse offset"
                  id="navbarSupportedContent"
                >
                  <ul class="nav navbar-nav menu_nav justify-content-end">
                    <li class="nav-item active">
                      <a class="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="about.html">
                        Sobre
                      </a>
                    </li>
                    <li class="nav-item submenu dropdown">
                      <a
                        href="../"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Projetos
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a class="nav-link" href="frontEnd.html">
                            Front End
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="backEnd.html">
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
}

export default Header;
