import React from "react";

import portraitImg from "../assets/img/profile-pic.png";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-content-container">
        <h1>About Me</h1>
        <p>INSERT MY BIO HERE</p>
        <img src={portraitImg} alt="Chelle Wood smiling" />
        <p>
          ADD IN MY DETAILED BIO
        </p>
      </div>
    </div>
  );
}