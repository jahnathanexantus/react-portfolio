import React from 'react';
import { portfolio } from '../../data';
import PortfolioItem from '../../components/PortfolioItem';

const Portfolio = () => {
  return (
    <div className=" portfolio section">
      <h2 className="section__title">My <span>Portfolio</span></h2>

      <div className="portfolio__container containre grid">
        {portfolio.map((item)=>{
          return <PortfolioItem key={item.id} {...item}/>
        })}
      </div>
    </div>
  );
}

export default Portfolio;
