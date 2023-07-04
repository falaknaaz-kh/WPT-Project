import { useState } from "react";
import React from "react";
import Footer from "./footer";
import Booking from "./booking";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Buses() {
  return (
    <>
      <Offers />
      <CounterApp />
      <Footer />
    </>
  );
}

function Details() {
  return <div></div>;
}
const offers = [
  {
    id: "5%",
    off: "Get flat 5% off on base fare!",
    text: "Booking above Rs 1000",
    code: "Apply Code : RXE12",
  },
  {
    id: "10%",
    off: "Get flat 5% off on base fare!",
    text: "Booking above Rs 1000",
    code: "Apply Code : RXE12",
  },

  {
    id: "200",
    off: "Get flat 5% off on base fare!",
    text: "Booking above Rs 1000",
    code: "Apply Code : RXE12",
  },
  {
    id: "300",
    off: "Get flat 5% off on base fare!",
    text: "Booking above Rs 1000",
    code: "Apply Code : RXE12",
  },
];

function Back() {
  <>
    <div class="container">
      <div class="buses" style={{ height: "70vh" }}></div>
    </div>
  </>;
}

function Offers() {
  return (
    <>
      <div class="container">
        <div class="buses" style={{ height: "70vh" }}></div>

        <div class="row mb-5">
          <div class="col-sm-10 col-md-3">
            <div class="flip-card ">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="./assets/img/1a.jpg"
                    alt="Avatar"
                    style={{ width: "190px", height: "100px" }}
                  />
                </div>
                <div id="c1" class="flip-card-back">
                  <p>Get flat 5% off on fare!</p>
                  <p>Booking above Rs 1000</p>
                  <p>Apply Code : RXE12</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-10 col-md-3">
            <div id="c2" class="card mb-3 ">
              <div class="flip-card me-4">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src="./assets/img/2a.jpg"
                      alt="Avatar"
                      style={{ width: "190px", height: "100px" }}
                    />
                  </div>
                  <div id="c2" class="flip-card-back">
                    <p>Get flat 10% off on fare!</p>
                    <p>Booking above Rs 2000</p>
                    <p>Apply Code : SWE12</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-10 col-md-3">
            <div id="c3" class="card">
              <div class="flip-card me-3">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src="./assets/img/3a.jpg"
                      alt="Avatar"
                      style={{ width: "190px", height: "100px" }}
                    />
                  </div>
                  <div id="c3" class="flip-card-back">
                    <p>Get flat Rs100 off on fare!</p>
                    <p>Booking above Rs 2500</p>
                    <p>Apply Code : GT100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-10 col-md-3">
            <div class="flip-card ms-2">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="./assets/img/4a.jpg"
                    alt="Avatar"
                    style={{ width: "190px", height: "100px" }}
                  />
                </div>
                <div id="c4" class="flip-card-back">
                  <p>Get flat 200 off on fare!</p>
                  <p>Booking above Rs 3000</p>
                  <p>Apply Code : GT200</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-1 col-md-2"></div>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    id: 0,
    tofrom: "Bandra Bus Station West to Malad Bus Depot",
    fare: "245",
    arrival: "11.25",
    depart: "9.20",
    rev: "3.5",
    nav: "/book1",
    visits:
      "Khar Telephone Exchange,  Khar  Ramkrishna Mission,  Arya Samaj Mandir , Chincholi Bunder Road",
  },
  {
    id: 1,
    tofrom: "Worli Depot to Marol Maroshi Bus Station",
    fare: "315",
    arrival: "11.05",
    depart: "10.30",
    rev: "3.2",
    nav: "/book2",
    visits:
      "Marol Lions Club,  Marol Naka,  Marol Village,  State Bank Of India Maro",
  },
  {
    id: 2,
    tofrom: "Pt Paluskar Chowk to Goregaon Bus Station West",
    fare: "200",
    arrival: "13.25",
    depart: "11.20",
    rev: "4.1",
    nav: "/book3",
    visits:
      "Best Nagar,  Vivek Vidyalaya,  Jawahar Nagar,  Jain Mandir Goregaon",
  },
  {
    id: 3,
    tofrom: "Kamla Nehru Park to J V P D Bus Station",
    fare: "160",
    arrival: "13.25",
    depart: "12.20",
    rev: "4.0",
    nav: "/book4",
    visits:
      "Juhu Hotel,  Juhu Bus Station,  Bharatiya Arogya Nidhi Hospital,  Utpal Sanghavi School ",
  },
  {
    id: 4,
    tofrom: "Trombay to Vesave Yari Road Bus Station",
    fare: "320",
    arrival: "14.35",
    depart: "13.20",
    rev: "3.2",
    nav: "/book5",
    visits:
      "Seven Bungalows Bus Station,  Picnic Cottage,  Machhalimar Versova,  Ganga Bhuwan",
  },
  {
    id: 5,
    tofrom: "Mantralaya to Santacruz Depot",
    fare: "345",
    arrival: "15.25",
    depart: "14.20",
    rev: "4.3",
    nav: "/book6",
    visits:
      "Ramkrishna Mission,  Arya Samaj Mandir,  Santacruz Police Station,  Shastri Nagar Scruz",
  },
  {
    id: 6,
    tofrom: "Tata Power Station to Santacruz Depot",
    fare: "200",
    arrival: "18.45",
    depart: "16.00",
    rev: "3.0",
    nav: "/book7",
    visits:
      " Ramkrishna Mission,  Arya Samaj Mandir,  Santacruz Police Station,  Shastri Nagar Scruz ",
  },
];
function Star() {
  return (
    <div>
      <div class="rate">
        <input type="button" id="star5" name="rate" value="5" />
        <label for="star5" title="text">
          5 stars
        </label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star4" title="text">
          4 stars
        </label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star3" title="text">
          3 stars
        </label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star2" title="text">
          2 stars
        </label>
        <input type="radio" id="star1" name="rate" value="1" />
        <label for="star1" title="text">
          1 star
        </label>
      </div>
    </div>
  );
}
function CounterApp() {
  const navigate = useNavigate();
  function go() {
    {
      data.map((item) => navigate("{item.nav}", { replace: true }));
    }
  }
  return (
    <div>
      {data.map((item) => (
        <div className="row">
          <div className="col-md-2 col-sm-12"> </div>
          <div className="col-md-8 col-sm-12">
            <div class="card mb-5">
              <div id="det" class="card-body d-flex">
                <div>
                  <h5 class="card-title">{item.tofrom}</h5>
                  <p class="card-text ">
                    Base fare: Rs {item.fare}&emsp;&emsp;&emsp; Departure:{" "}
                    {item.depart}&emsp;&emsp;&emsp;&emsp; Arrival:{" "}
                    {item.arrival}
                    <i class="fa fa-shield me-0" />
                    {item.rev}
                  </p>
                  <p>Visits: {item.visits} </p>
                </div>
                <Likes />
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-12"> </div>
        </div>
      ))}
    </div>
  );
}

function Likes() {
  // let counter = 100; // stateless
  let [counter, setCounter] = useState(10); // stateful + DOM Opr

  let likeMeAction = () => {
    counter = counter + 1;

    // Asking react to perform dom opr
    // how to trigger the DOM Opr
    setCounter(counter);
  };

  return (
    <div>
      <div>
        <h4>
          {" "}
          <input
            class=" btn fs-3 mb-3 ms-4"
            type="button"
            value="&#128077;"
            onClick={likeMeAction}
          />
          {counter}
        </h4>
      </div>
    </div>
  );
}
export default Buses;
