import React from "react";

import portraitImg from "../assets/img/profile-pic.png";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-content-container">
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.</p>
        <img src={portraitImg} alt="Chelle Wood smiling" />
        <p>
          I'm a Texas girl at heart and I love a good adventure. I am a recent graduate of the edX MERN Full Stack
          Bootcamp. My goal in life is to always push myself and continue to grow and learn. edX has provided me a
          rich knowledge of what it takes to be a beginner programmer and the kind of grit you have to put in to make
          it in this industry. I look forward to what the universe has in store for me and want to continue to see
          how deep this programming rabbit hole goes.
        </p>
      </div>
    </div>
  );
}