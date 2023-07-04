import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div class="foot" style={{ height: "80px" }}>
          <div class="row justify-content-center mt-4 fs-5 ">
            <div class="col-md-6 col-sm-12 text-center m-4">
              <Link class="flink text-dark me-3" to={"/dashboard"}>
                Home
              </Link>
              <Link class="flink text-dark me-3" to={"/about"}>
                About
              </Link>
              <Link class="flink text-dark me-3" to={"/contact"}>
                Contact
              </Link>
              <Link class="flink text-dark" to={"/buses"}>
                Bus Details
              </Link>
            </div>
            <div class="social fs-3">
              <Link class="fa fa-facebook " to={"/facebook"}></Link>
              <Link class="fa fa-linkedin" to={"/linkedin"}></Link>
              <Link class="fa fa-twitter" to={"/twitter"}></Link>
              <Link class="fa fa-instagram me-3" to={"/insta"}></Link>
            </div>
          </div>
          <p class="copy mt-2 ">@Copyright Team 48. 2023 Bus Booking Travels. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
