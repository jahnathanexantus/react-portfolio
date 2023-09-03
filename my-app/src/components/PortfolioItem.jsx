import React from 'react'

const PortfolioItem = ({img,title,details}) => {
    return (
        <div className="portfolio__item">
            <img src="" alt="" className="portfolio__img" />
            <div className="portfolio__hover">
                <h3 className="portfolio__title">{title}</h3>
            </div>
            <div className="portfolio__modal">
                <div className="portfolio__modal-content">
                    
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem
