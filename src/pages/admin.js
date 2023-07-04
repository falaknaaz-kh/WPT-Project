import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Admin() {
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

      if (
        !(user.email == "falaknaaz1509@gmail.com" && user.password == "falak")
      ) {
        let erroMessage = "Not an admin";
        throw new Error(erroMessage);
      }

      localStorage.setItem("loginStatus", "true");
      navigate("/dashboard", { replace: true });
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

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-5 mt-5 border rounded-4 border-warning  p-5 opacity-75">
          <div className="d-flex">
            <div>
              <h1>Welcome Administrator</h1>
            </div>
          </div>
          <div className="fs-1 text-center mt-4 ">Admin Login</div>

          <form ref={formRef} className="needs-validation">
            <input
              type="email"
              className="form-control mt-4"
              placeholder="Enter Email"
              value={user.email}
              onChange={handlerEmailAction}
              required
            />

            <input
              type="password"
              className="form-control  mt-5"
              placeholder="Enter password"
              value={user.password}
              onChange={handlerPasswordAction}
              required
            />

            <input
              type="button"
              value="Login"
              className="w-100 btn  btn-warning  mt-3"
              onClick={loginAction}
            />
          </form>

          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
