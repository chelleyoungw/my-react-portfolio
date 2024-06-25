// Imports React.
import React from "react";

// Imports the created PortfolioCard component.
import PortfolioCard from "../components/PortfolioCard";

// Imports all the necessary images.
// TODO: Add more images as I add the corresponding projects
import mixtapeImg from "../assets/img/mixtape.png";

// Exports all the HTML that will display on the portfolio page.
export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <h1>Portfolio</h1>
      <p>
        A compiled list of my projects completed during the edX Bootcamp. More to follow!
      </p>
      <div className="portfolio-cards-container">
        <PortfolioCard
          title="I Made You A Mixtape"
          imageSrc={mixtapeImg}
          deployedLink="https://jnelson4004.github.io/i-made-you-a-mixtape/"
          repoLink="https://github.com/jnelson4004/i-made-you-a-mixtape.git"
        />
{/* TODO: ADD MORE PORTFOLIOS */}
      </div>
    </div>
  );
}