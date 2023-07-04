import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";



class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light sticky-top">
          <div class="container">
            <Link class="navbar-brand text-dark" to={"/dashboard"}>
              <img
                src="./assets/img/4.png"
                class="rounded me-4"
                width="100"
                height="60"
              />
              RightOnTime
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item me-3">
                <Link class="nav-link active fs-5 text-dark fa fa-home ms-5" to={"/dashboard"}>
               Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-5 me-3 text-dark fa fa-bus ms-5" to={"/buses"}>
                  Buses
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-5 me-3 fa fa-address-card text-dark ms-5" to={"/about"}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-5 me-3 text-dark fa fa-envelope ms-5" to={"/contact"}>
                 Contact
                </Link>
              </li>
              <li class="nav-item dropdown fs-5 me-5 pe-3 ">
                <Link
                  class="nav-link dropdown-toggle text-dark fa fa-user me-5 ms-5"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                Account
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  {/* <li>
                    <Link to={"/dashboard"} class="dropdown-item">
                      My Bookings
                    </Link>
                  </li>

                  <li>
                    <hr class="dropdown-divider" />
                  </li> */}
                  <li>
                    <Link to={"/login"} class="dropdown-item">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to={"/reg"} class="dropdown-item">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                  <hr class="dropdown-divider" />
                    <Link to={"/admin"} class="dropdown-item">
                      Admin
                    </Link>
                    <Link id="userlist" to={"/userlist"} class="dropdown-item">
                      User List
                    </Link>
                    <Link id="msglist" to={"/msglist"} class="dropdown-item">
                    Messages
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}


export default Navigation;
