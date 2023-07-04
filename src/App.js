import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import { useEffect } from 'react';
import Buses from "./pages/buses";
import Navigation from "./pages/navigation";
import Register from "./pages/register";
import Admin from "./pages/admin";
import UserList from "./pages/userlist";
import MsgList from "./pages/msglist";
import Contact from "./pages/contact";
import Booking from "./pages/booking";
import Booking1 from "./pages/book1";
import Booking2 from "./pages/book2";
import Booking3 from "./pages/book3";
import Booking4 from "./pages/book4";
import Booking5 from "./pages/book5";
import Booking6 from "./pages/book6";
import Booking7 from "./pages/book7";
import Payment from "./pages/payment";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation />
     

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/msglist" element={<MsgList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/buses" element={<Buses />} />
          <Route path='/twitter' element={<RedirectPageTw />} />
          <Route path='/insta' element={<RedirectPageIns />} />
          <Route path='/facebook' element={<RedirectPageFb />} />
          <Route path='/linkedin' element={<RedirectPageLi />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking1" element={<Booking1/>} />
          <Route path="/booking2" element={<Booking2/>} />
          <Route path="/booking3" element={<Booking3/>} />
          <Route path="/booking4" element={<Booking4/>} />
          <Route path="/booking5" element={<Booking5/>} />
          <Route path="/booking6" element={<Booking6/>} />
          <Route path="/booking7" element={<Booking7/>} />
          <Route path="/payment" element={<Payment/>} />

        </Routes>

      </BrowserRouter>
      
    </>
  );
}
const RedirectPageTw = () => {
  useEffect(() => {
    window.location.replace('https://twitter.com/__RightOnTime__');
  }, [])

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return <div>
    <h3>Redirecting...</h3>
  </div>
}
const RedirectPageIns = () => {
  useEffect(() => {
    window.location.replace('https://www.instagram.com/__rightontime__/');
  }, [])

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return <div>
    <h3>Redirecting...</h3>
  </div>
}
const RedirectPageFb = () => {
  useEffect(() => {
    window.location.replace('https://www.facebook.com/people/Right-Ontime/pfbid0szUGFvHbqXwUCHMCognD1X3CK8J3V4h25VG2DLv4AAgnMEN5dwR3sFd5NqA7ffrnl/');
  }, [])

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return <div>
    <h3>Redirecting...</h3>
  </div>
}
const RedirectPageLi = () => {
  useEffect(() => {
    window.location.replace('https://www.linkedin.com/in/right-ontime-b41a0027b/ ');
  }, [])

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return <div>
    <h3>Redirecting...</h3>
  </div>
}

export default App;
