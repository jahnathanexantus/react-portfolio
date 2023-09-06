import React from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  
} from 'react-icons/fa'
import {FiSend} from 'react-icons/fi'
import './contact.css'

const Contact = () => {
  return (
   <section className="contact section">
    <h2 className="section__title">Get In <span>Touch</span></h2>

    <div className="contact__container container grid">
      <div className="contact__data">
        <div className="contact__title">Don't be shy</div>
        <p className="contact__description">
          Feel free to get in touch with me. I am always open to discussing new 
          projects, creative ideas or oppertunities to be part of your 
          vision
        </p>

        <div className="contact__info">
          <div className="info__item">
            <FaEnvelopeOpen className='info__icon'/>

            <div>
              <span className="info__title">Mail Me</span>
              <h4 className="info__desc">jahnathanexantus@gmail.com</h4>
            </div>
          </div>
          <div className="info__item">
            <FaPhoneSquareAlt className='info__icon'/>

            <div>
              <span className="info__title">Call me</span>
              <h4 className="info__desc">786-856-9264</h4>
            </div>
          </div>
        </div>

        {/* <div className="contact__social">
          <a href="https://facebook.com" className="contact__social-link">
            <FaFacebookF/>
          </a>
          <a href="https://facebook.com" className="contact__social-link">
            <FaFacebookF/>
          </a>
          <a href="https://facebook.com" className="contact__social-link">
            <FaFacebookF/>
          </a>
          <a href="https://facebook.com" className="contact__social-link">
            <FaFacebookF/>
          </a>
        </div> */}
      </div>

      <form action="" className="contact__form">
        <div className="form__input-group">
          <div className="form__input-div">
            <input type="text " placeholder='your name' className='form__control' />
          </div>
          <div className="form__input-div">
            <input type="email " placeholder='your email' className='form__control' />
          </div>
          <div className="form__input-div">
            <input type="text " placeholder='your Subject' className='form__control' />
          </div>
        </div>

        <div className="form__input-div">
            <textarea placeholder='your message' className='form__control textarea'></textarea>
          </div>
          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend/>
            </span>
          </button>
      </form>
    </div>
   </section>
  );
}

export default Contact;
