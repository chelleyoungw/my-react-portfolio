import React from "react";

import resumePDF from "../assets/pdf/chelle-resume.pdf";

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-content-container">
        <h1>Resume</h1>
        <p>
          Click{" "}
          <a href={resumePDF} download>
            here
          </a>{" "}
          to download my resume for your records.
        </p>
        <div className="skills-section">
          <h2>Technical Skills</h2>
          <ul>
            <li>Microsoft Suite</li>
            <li>HTML & CSS</li>
            <li>Javascript</li>
            <li>Node JS</li>
            <li>React</li>
            <li>SQL</li>
            <li>React</li>
            <li>Office Suite</li>
          </ul>
        </div>
        <div className="skills-section">
          <h2>Personal Skills</h2>
          <ul>
            <li>Problem Solving</li>
            <li>Crucial Conversations</li>
            <li>Organization</li>
            <li>Time Management</li>
            <li>Emotional Intelligence</li>
            <li>Leadership</li>
            <li>QPR Certified</li>
            <li>Conversational American Sign Language</li>
          </ul>
        </div>
      </div>
    </div>
  );
}