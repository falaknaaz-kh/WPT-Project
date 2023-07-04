import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";




function Login() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let loginAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }
      // BACKEND :: ...
      let url = `http://localhost:4000/login-by-get?email=${user.email}&password=${user.password}`;
      let res = await fetch(url);

      if (res.status == 500) {
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }

      localStorage.setItem("loginStatus", "true");
      navigate("/home", { replace: true });
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
        setIsSuccess(false);
      }, 5000);
    }
  };

  // Validation
  function showEmailValidation() {
    // Get the email input element
    var emailInput = document.getElementById("email");

    // Get the email value
    var email = emailInput.value;

    // Define the email validation pattern
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Check if the email matches the pattern
    if (!emailPattern.test(email)) {
      // Show the email validation pop-up box
      var emailValidationBox = document.getElementById("email-validation");
      emailValidationBox.style.display = "block";
      document.getElementById("bttn").disabled = true;
    } else {
      // Hide the email validation pop-up box if the email is valid
      var emailValidationBox = document.getElementById("email-validation");
      emailValidationBox.style.display = "none";
      document.getElementById("bttn").disabled = false;
    }
  }
  //show password
  function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-5 mt-5 border rounded-4 border-warning  p-5 opacity-75">
          <div className="d-flex justify-content-center">
            <div>
              <h1 className="  ">Start Your Journey Here</h1>
            </div>

          
          </div>
          <div className="fs-1 text-center mt-4 ">Login</div>

          <form ref={formRef} className="needs-validation">
            <input
              id="email"
              type="email"
              className="form-control mt-4"
              placeholder="Enter Email"
              value={user.email}
              onChange={handlerEmailAction}
              onInput={() => {
                showEmailValidation();
              }}
              required
            />
            <div id="email-validation" style={{ display: "none" }}>
              <p>Email address must include @</p>
            </div>

            <input
              id="password"
              type="password"
              className="form-control  mt-5"
              placeholder="Enter password"
              value={user.password}
              onChange={handlerPasswordAction}
              required
            />
            <div id="pass_check" className="mt-2">
              <input
                type="checkbox"
                onClick={() => {
                  myFunction();
                }}
              />
              <label for="show_password">Show Password</label>
            </div>
            {/* <div className="text-end">
              <input
                type="button"
                value="Forgot Password"
                className="mt-3 btn btn-info"
              />
            </div> */}
            <input
              id="bttn"
              type="button"
              value="Login"
              className="w-100 btn  btn-warning  mt-3"
              onClick={loginAction}
            />
            <div className="text-center mt-5 ">
              <b className="text-success">
                <u>New User?</u>&nbsp;&nbsp;&nbsp;&nbsp;
              </b>
              
              <Link class=" fs-4 btn fw-bold mb-2" to={"/reg"}>
              Sign Up
                </Link>
            </div>
          </form>

          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Login;
