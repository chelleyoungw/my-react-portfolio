import React from "react";

import githubImg from "../assets/img/logo_github.svg";
import linkedinImg from "../assets/img/logo_linkedin.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContents">
        <a href="https://github.com/chelleyoungw" target="_blank">
          <img src={githubImg} alt="GitHub Logo" />
        </a>
        <a href="https://linkedin.com/in/chelle-wood-bs-cvai-b1231511a" target="_blank">
          <img src={linkedinImg} alt="LinkedIn Logo" />
        </a>
      </div>
    </footer>
  );
}