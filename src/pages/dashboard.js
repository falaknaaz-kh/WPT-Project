import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navigation from "./navigation";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  let [user, setUser] = useState({
    username: "",
  });

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };
  function choose(event) {
    // const [val, setVal] = useState('');
    // const navigate = useNavigate();
    if (user.username == "1") {
      navigate("/booking1", { replace: true });
    }
    if (user.username == "2") {
      navigate("/booking2", { replace: true });
    }
    if (user.username == "3") {
      navigate("/booking3", { replace: true });
    }
    if (user.username == "4") {
      navigate("/booking4", { replace: true });
    }
    if (user.username == "5") {
      navigate("/booking5", { replace: true });
    }
    if (user.username == "6") {
      navigate("/booking6", { replace: true });
    }
    if (user.username == "7") {
      navigate("/booking7", { replace: true });
    }
  }
  return (
    <div>
      <div class="masthead">
        <div class="fromto">
          <div
            class="row justify-content-center align-items-center"
            style={{ height: "70vh" }}
          >
            <div class="col col-sm-12 col-md-6 rounded-4">
              <div class="">
                <div class="input-group mb-3 form-control-lg">
                  <label class="input-group-text" for="inputGroupSelect01">
                    From To
                  </label>
                  <select
                    class="form-select"
                    id="inputGroupSelect01"
                    onChange={handlerUsernameAction}
                  >
                    <option selected>Choose Bus</option>
                    <option value="1">
                      Bandra Bus Station West to Malad Bus Depot
                    </option>
                    <option value="2">
                      Worli Depot to Marol Maroshi Bus Station
                    </option>
                    <option value="3">
                      Pt Paluskar Chowk to Goregaon Bus Station West
                    </option>
                    <option value="4">
                      Kamla Nehru Park to J V P D Bus Station
                    </option>
                    <option value="5">
                      Trombay to Vesave Yari Road Bus Station
                    </option>
                    <option value="6">Mantralaya to Santacruz Depot</option>
                    <option value="7">
                      Tata Power Station to Shastri Nagar Scruz
                    </option>
                  </select>
                </div>

                <div class="text-center">
                  <input
                    id="submit"
                    class="mt-4 form-control form-control-sm w-50 mb-3 btn btn-warning"
                    type="submit"
                    value="Search Bus"
                    onClick={choose}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-lg">
            <div class="card">
              <img src=".\assets\img\0map.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  From Bandra Bus Station West to Malad Bus Depot
                </h5>
                <p class="card-text">
                  NEXT STOP: Khar Telephone Exchange to Khar Ramkrishna Mission
                  to Arya Samaj Mandir
                </p>

                <Link to={"/booking1"} class="btn btn-warning">
                  Find Route
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg">
            <div class="card">
              <img src=".\assets\img\1map.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  From Worli Depot to Marol Maroshi Bus Station
                </h5>
                <p class="card-text">
                  NEXT STOP: Old Khar to Khar Station West to Khar Police
                  Station to St Teresa School
                </p>
                <Link to={"/booking2"} class="btn btn-warning">
                  Find Route
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg">
            <div class="card">
              <img src=".\assets\img\3map.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  From Pt Paluskar Chowk to Goregaon Bus Station
                </h5>
                <p class="card-text">
                  NEXT STOP: Old Khar to Khar Station West to Khar Police
                  Station to St Teresa School
                </p>
                <Link to={"/booking3"} class="btn btn-warning">
                  Find Route
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg">
            <div class="card">
              <img src=".\assets\img\4map.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  From Kamla Nehru Park to J V P D Bus Station
                </h5>
                <p class="card-text">
                  NEXT STOP: Khar Telephone Exchange to Khar Ramkrishna Mission
                  to Santacruz Police Station
                </p>
                <Link to={"/booking4"} class="btn btn-warning">
                  Find Route
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row  mt-5">
          <div class="col-md-2"></div>
          <div id="caro" class="col-md-8 col-sm-12">
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              style={{ width: "120%" }}
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src=".\assets\img\c1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Arrives on time</h5>
                    <p>
                      You will get to your destination on time and never be late
                      for college again.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src=".\assets\img\c2.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Clean buses</h5>
                    <p>
                      We keep our buses clean and in top condition for your
                      comfort.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src=".\assets\img\c3.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>We have the best drivers</h5>
                    <p>
                      Drivers have atleast 3+years experience and are the best
                      in the field.
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>

      <div class="container">
        <div class="row mt-5">
          <div class="col-md-2"></div>
          <img className="stoff" src=".\assets\img\zz.jpg" />
          <div class="col-md-2"></div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mt-5">
        <div class="col-md-2 col-sm-1"></div>
        <div class="col-md-4 col-sm-10">
          <h1 class="fs-0">Ride On Time</h1>
          <h4>Right On Time</h4>
          <div>
            <Link
              class="mt-4 form-control form-control-sm w-50 mb-3 btn btn-warning"
              to={"/buses"}
            >
              Search Buses
            </Link>
          </div>
        </div>
        <div class="col-md-4 col-sm-10">
          <img
            src=".\assets\img\1.jpg"
            class="rounded mt-3 mb-3"
            width="100%"
            alt=""
          />
        </div>
        <div class="col-md-2 col-sm-1"></div>
      </div>

      <div class="container">
        <div class="row mt-5">
          <div class="col-md-2"></div>
          <img className="stoff" src=".\assets\img\yy.jpg" />
          <div class="col-md-2"></div>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  );
}

export default Dashboard;
