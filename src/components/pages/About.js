import React from "react";
// import '../styles/about.css';
// import florida from '../assets/images/IMG_Yasin_FL.png'
// import '../styles/about.css';
// import florida from '../assets/images/IMG_Yasin_FL_resizeimage.png'
import florida from "../assets/images/IMG_Yasin_NHS.png";

export default function About() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-5">
            <img className="profile-pic" src={florida} alt="Photo of Yasin" />
          </div>
          <div className="col-xs-5">
            <h1 className="about-header">About Me</h1>
            <p>
              Hello and welcome to my Portfolio Page. My name is Yasin Munye and
              I am a proactive Software Developer that is currently specializing
              in MERN (Mongo, Express, React, Node) FULL STACK DEVELOPMENT. I
              have also developed webpages in HTML 5, which includes HTML, CSS,
              and Javascript. I have a strong passion for web design and and
              functionality. In the near future the I will be expanding into
              other areas of computer programming including other languages like
              Java, Python and others but not limited to learning cybersecurity
              and networking. This website is a portfolio of my work throughout
              my programming journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
