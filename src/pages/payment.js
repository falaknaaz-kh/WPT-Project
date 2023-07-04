import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Payment() {
  return (
    <>
      <div id="container">
        <h1 style={{ color: "blue" }}>Payment Successful</h1>
        <p style={{ margin: "20px 0" }}>
          Thank you for your payment. Your transaction has been processed
          successfully.
        </p>
        <p style={{ margin: "20px 0" }}>Order ID: 123456789</p>
        <p style={{ margin: "20px 0" }}>Amount: Rs 599</p>

        <Link id="button" class="btn" to={"/dashboard"}>
          Back to Home
        </Link>
      </div>
    </>
  );
}

export default Payment;
