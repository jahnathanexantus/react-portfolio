import React from 'react';
import Profile from '../../assets/images/profile (2).jpg'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css'

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title"><span>I'm Jahnathan Exantus.</span> Full-Stack web Developer</h1>
          <p className="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis 
          laboriosam porro exercitationem soluta nobis fuga, 
          eligendi animi ullam nemo, minima consectetur voluptas? Officia 
          ipsam voluptatem enim sed ipsa amet.
          </p>
            <Link to='/about'  className='button'>
              More About Me{''} 
              <span className="button__icon"><FaArrowRight/></span>
            </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
    );
}

export default Home;
