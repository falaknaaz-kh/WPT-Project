import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Footer from "./footer";

function Booking6() {
    return (
      <>
        <div className="row justify-content-center">
          <div className="col col-sm-11 col-md-6 mt-5">
            <div className="w-100">
              <div className="border border-warning rounded-4 p-5">
                <h1 className="mb-3 text-center">Bus Booking</h1>
                <h3 className="opacity-75 mb-3">Boarding and Droping:</h3>
                <div className="too d-flex">
                  <div className="">
                    <h4>From:</h4>
                    <h5 className="opacity-50 mt-2">
                   Mantralaya 
                    </h5>
                  </div>
                  <div className="text-end ">
                    <h5>Time: 14.20</h5>
                  </div>
                </div>
  
                <div className="too d-flex">
                  <div>
                  <h4>To:</h4>
                    <h5 className="opacity-50 mt-2">
                   Santacruz Depot
                    </h5>
                  </div>
                  <div className="justify-content-end ">
                    <h5>Time:15.25</h5>
                  </div>
                </div>
                <hr />
  
                <div className="too d-flex">
                  <div className="mt-2">
                    <h3>
                      <b>Fare Details:</b>
                    </h3>
                    <h4>Amount:</h4>
                    <p>Taxes will be calculated during payment.</p>
                  </div>
                  <div className="inr">
                    <h5 className=" ms-5 opacity-75 text-right mb-3">INR 345.00</h5>
                  </div>
                </div>
                <hr />
                <div className="">
                <Link
                  class="btn btn-warning w-100 mt-4"
                  type="button"
                  value="Pay Now"
                  to={"/payment"}
                >
                  Pay Now
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
    export default Booking6;