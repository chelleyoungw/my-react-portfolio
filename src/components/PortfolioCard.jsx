import React from "react";

const PortfolioCard = ({ title, imageSrc, deployedLink, repoLink }) => {
  return (
    <div className="portfolioCard">
      <h2>{title}</h2>
      <img src={imageSrc} alt={title} />
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Application
        </a>
      </p>
      <p>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </p>
    </div>
  );
};

export default PortfolioCard;