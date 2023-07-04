import { useState } from "react";
import React from "react";

const data = [
  {
    id: 0,
    tofrom: "Bandra Bus Station West to Malad Bus Depot",
    fare: "245",
    arrival: "11.25",
    depart: "9.20",
    visits:
      "Khar Telephone Exchange,  Khar  Ramkrishna Mission,  Arya Samaj Mandir , Chincholi Bunder Road",
  },
  {
    id: 1,
    tofrom: "Worli Depot to Marol Maroshi Bus Station",
    fare: "315",
    arrival: "11.05",
    depart: "10.30",
    visits:
      "Marol Lions Club,  Marol Naka,  Marol Village,  State Bank Of India Maro",
  },
  {
    id: 2,
    tofrom: "Pt Paluskar Chowk to Goregaon Bus Station West",
    fare: "200",
    arrival: "13.25",
    depart: "11.20",
    visits:
      "Best Nagar,  Vivek Vidyalaya,  Jawahar Nagar,  Jain Mandir Goregaon",
  },
  {
    id: 3,
    tofrom: "Kamla Nehru Park to J V P D Bus Station",
    fare: "160",
    arrival: "13.25",
    depart: "12.20",
    visits:
      "Juhu Hotel,  Juhu Bus Station,  Bharatiya Arogya Nidhi Hospital,  Utpal Sanghavi School ",
  },
  {
    id: 4,
    tofrom: "Trombay to Vesave Yari Road Bus Station",
    fare: "320",
    arrival: "14.35",
    depart: "13.20",
    visits:
      "Seven Bungalows Bus Station,  Picnic Cottage,  Machhalimar Versova,  Ganga Bhuwan",
  },
  {
    id: 5,
    tofrom: "Mantralaya to Santacruz Depot",
    fare: "345",
    arrival: "15.25",
    depart: "14.20",
    visits:
      "Ramkrishna Mission,  Arya Samaj Mandir,  Santacruz Police Station,  Shastri Nagar Scruz",
  },
  {
    id: 6,
    tofrom: "Tata Power Station to Santacruz Depot",
    fare: "200",
    arrival: "18.45",
    depart: "16.00",
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
  return (
    <div>
      {data.map((item) => (
        <div class="container" style={{ width: "70%" }}>
          <div class="card mb-5">
            <div id="det" class="card-body d-flex">
              <div>
                <h5 class="card-title">{item.tofrom}</h5>
                <p class="card-text">
                  Base fare: Rs {item.fare}&emsp;&emsp;&emsp; Departure:{" "}
                  {item.depart}&emsp;&emsp;&emsp; Arrival: {item.arrival}
                </p>
                <p>Visits: {item.visits} </p>
              </div>
              <Likes />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Likes() {
  // let counter = 100; // stateless
  let [counter, setCounter] = useState(0); // stateful + DOM Opr

  let likeMeAction = () => {
    counter = counter + 1;

    // Asking react to perform dom opr
    // how to trigger the DOM Opr
    setCounter(counter);
  };
  return (
    <div>
      <div>
        <Star />

        <h5>
          {" "}
          {counter}
          <input
            class="m-2"
            type="button"
            value="&#128077;"
            onClick={likeMeAction}
          />
        </h5>
        <a href="#" class="btn btn-warning">
          Book Ticket
        </a>
      </div>
    </div>
  );
}
//export default Buses;



function Booking() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col col-sm-11 col-md-6 mt-5">
          <div className="w-100">
            <div className="border border-warning rounded-4 p-5">
              <h1 className="mb-3 text-center">Bus Booking</h1>
              <h3 className="opacity-75 mb-3">Boarding and Droping:</h3>
              <div className="d-flex">
                <div className="">
                  <h4>From:</h4>
                  <h5 className="opacity-50 mt-2">
                  Bandra Bus Station West
                  </h5>
                </div>
                <div className="text-end ">
                  <h5>Time: 9.20</h5>
                </div>
              </div>

              <div className="d-flex">
                <div>
                <h4>To:</h4>
                  <h5 className="opacity-50 mt-2">
                  Malad Bus Depot
                  </h5>
                </div>
                <div className="justify-content-end ">
                  <h5>Time: 11.25</h5>
                </div>
              </div>
              <hr />

              <div className="d-flex">
                <div className="mt-2">
                  <h3>
                    <b>Fare Details:</b>
                  </h3>
                  <h4>Amount:</h4>
                  <p>Taxes will be calculated during payment.</p>
                </div>
                <div className="inr">
                  <h5 className=" ms-5 opacity-75 text-right mb-3">INR 450.50</h5>
                </div>
              </div>
              <hr />
              <div className="">
                <input
                  className="btn btn-warning w-100 mt-4"
                  type="button"
                  value="Pay Now"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
