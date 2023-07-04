import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navigation from "./navigation";
import Footer from "./footer";

class About extends React.Component {
  render() {
    return (
      <div>

        <div class="row justify-content-start mt-4">
          <div class="col-md-1 col-sm-1"></div>
          <div class="col-md-10 col-sm-10">
            <h3 class="text-dark">About Us</h3>
            <p>
              Right On Time is a website to book buses from and to college and
              vice versa. This website was made by a group of three PG-DAC
              students as a Web Based Technology end module project. This site
              helps college students to book a bus, teachers to book buses and
              bus drivers to register their bus to be available for transport.
            </p>
            <h3 class="text-dark mb-2">Team Information</h3>
            <div class="clearfix">
              <img class="imgsus m-3 me-5" src="./assets/img/rahul.jpg" />
              <p class="pt-2">
                <h4 class="text-dark">Rahul Raj</h4>
                Rahul Raj is from Patna, Bihar. He has done my 10th and 12th
                from Bihar State Board. He has completed his graduation in BCA
                from Aryabhatta Knowledge University, Patna. After that he did
                MCA from Nalanda Open University, Patna. Currently, he is
                persuing PG Diploma in Advance computing from CDAC Mumbai Juhu .
                He likes to sing and listen to songs in his free time and also
                likes Running.
              </p>
            </div>

            <div class="clearfix">
              <img class="imgsus m-3 me-5" src="./assets/img/falak.jpg" />

              <p class="pt-1">
                <h4 class=" text-dark">Falak Naaz</h4>
                Falak Naaz is from dhanbad, jharkhand, she passed 10std with 92%
                marks and 12std with 87% marks from jharkhand. She has done B.SC
                and M.SC from Dhanbad uni, Jharkhand. Currently, she is persuing
                PG diploma in Advanced computing from CDAC Mumbai khargar. She
                is the Communication lead of her team. In year 2020, she taught
                as a SME on some online teaching platforms. In high school, she
                was part of the student council as the science and technology
                club leader of the school. She likes to read books, learn new
                things and enjoys learnig forign languages.
              </p>
            </div>

            <div class="clearfix">
              <img class="imgsus m-3 me-5" src="./assets/img/bhumika.jpg" />
              <p class="pt-1">
                <h4 class=" text-dark">Bhumika Dasgupta</h4>
                Bhumika Dasgupta is from Nashik, Maharashtra. She completed her
                10th and 12th from Pune university and secured 90.20% and 75.54%
                respectively , later she did complete her BTech in Information
                technology in Pune university from the year to 2018-2022 and
                secured 8.54 Cgpa. Currently she is pursuing post graduation
                course in advance computing from CDAC Mumbai Juhu. She is the
                Communication lead of her team. She likes to read books both
                fictional and non fictional and likes to surf on Internet in
                order to learn new, new things on a daily basis.
              </p>
            </div>
          </div>
          <div class="col-md-1 col-sm-1"></div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default About;
