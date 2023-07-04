import { useRef, useState } from "react";
import Footer from "./footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Register() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  // let [gender, setGender] = useState("gender");
  // let [occupation, setOccupation] = useState("occupation");

  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
    gender: "",
    occupation: "",
  });

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
  };

  let handleGender = (e) => {
    let newuser = { ...user, gender: e.target.value };
    setUser(newuser);
  };

  let handleOccupation = (e) => {
    let newuser = { ...user, occupation: e.target.value };
    setUser(newuser);
  };

  // Email Validation
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

  //validation
  function showNameValidation() {
    // Get the name input element
    var nameInput = document.getElementById("name");

    // Get the name value
    var name = nameInput.value;

    // Define the name validation pattern
    var namePattern = /^[A-Za-z\s]+$/;

    // Check if the name matches the pattern
    if (!namePattern.test(name)) {
      // Show the name validation pop-up box
      var nameValidationBox = document.getElementById("name-validation");
      nameValidationBox.style.display = "block";
      nameValidationBox.classList.add("validation-error");
      document.getElementById("bttn").disabled = true;
    } else {
      // Hide the name validation pop-up box if the name is valid
      var nameValidationBox = document.getElementById("name-validation");
      nameValidationBox.style.display = "none";
      nameValidationBox.classList.remove("validation-error");
      document.getElementById("bttn").disabled = false;
    }
  }

  //Password-VALIDATION
  function passwordValidation() {
    var passwordInput = document.getElementById("password");

    var password = passwordInput.value;

    var passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    if (!passwordPattern.test(password)) {
      var passwordValidationBox = document.getElementById(
        "password-validation"
      );
      passwordValidationBox.style.display = "block";
      document.getElementById("bttn").disabled = true;
    } else {
      var passwordValidationBox = document.getElementById(
        "password-validation"
      );
      passwordValidationBox.style.display = "none";
      document.getElementById("bttn").disabled = false;
    }
  }

  let registerAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND
      let url = `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}&gender=${user.gender}&occupation=${user.occupation}`;

      let res = await fetch(url);

      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newuser = {
        username: "",
        password: "",
        email: "",
        mobile: "",
        gender: "",
        occupation: "",
      };
      setUser(newuser);

      formRef.current.classList.remove("was-validated");

      alert("success");
      setIsSuccess(true);
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-11 col-md-5 border border-warning p-5 mt-5 rounded-4">
          <div className=" text-center">
            <h1>User Registration</h1>
          </div>

          <form ref={formRef} className="needs-validation">
            <input
              id="name"
              type="text"
              className="form-control g mb-3 mt-3"
              placeholder="Enter username"
              value={user.username}
              onChange={handlerUsernameAction}
              required
              onClick={() => showNameValidation()}
              minLength={4}
            />
            <div id="name-validation" style={{ display: "none" }}>
              <p className="text-danger">Enter a valid name !</p>
            </div>
            <input
              id="password"
              type="password"
              className="form-control  mb-3"
              placeholder="Enter password"
              value={user.password}
              onChange={handlerPasswordAction}
              onClick={() => passwordValidation()}
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
            <div id="password-validation" style={{ display: "none" }}>
              <p className="text-danger">
                Must contain atleast one uppercase,lowercase,special character,
                Min 8 & Max 30 characters
              </p>
            </div>
            <input
              id="email"
              type="email"
              className="form-control  mb-3"
              placeholder="Enter Email"
              value={user.email}
              onChange={handlerEmailAction}
              onClick={() => {
                showEmailValidation();
              }}
              required
            />
            <div id="email-validation" style={{ display: "none" }}>
              <p className="text-danger">Enter a valid email !</p>
            </div>
            <input
              type="text"
              className="form-control  mb-4"
              placeholder="Enter mobile"
              value={user.mobile}
              onChange={handlerMobileAction}
              minLength={10}
              maxLength={10}
              pattern="\d*"
              required
            />
            <div className="d-flex w-100 mb-4 justify-content-center">
              <div className="">
                <select
                  className="form-select  "
                  aria-label="Default select example"
                  value={user.gender}
                  onChange={handleGender}
                  required
                >
                  <option selected>Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="ms-5">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={user.occupation}
                  onChange={handleOccupation}
                  required
                >
                  <option selected>Occupation</option>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Driver">Driver</option>
                </select>
              </div>
            </div>

            <input
              id="bttn"
              type="button"
              value="Register"
              className="w-100 btn  btn-warning"
              onClick={registerAction}
            />
            <div className="text-center mt-5 ">
              <b className="text-success">
                <u>Already a User</u>&nbsp;&nbsp;&nbsp;&nbsp;
              </b>

              <Link class=" fs-4 btn fw-bold mb-2" to={"/login"}>
                Log In
              </Link>
            </div>
          </form>

          {isSuccess && <div className="alert alert-success mt-4">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
