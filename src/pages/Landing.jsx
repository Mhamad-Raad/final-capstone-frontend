import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../assets/stylesheets/landing.css';
import img from '../assets/images/desktop.svg';

export default function Landing() {
  return (
    <section className="landing_page">
      <div className="heading">
        <Link to="/sign-up" className="logo">Logo</Link>
        <div className="title">
          <div className="text">
            <h1>
              Travel to the most
              <br />
              exotic places of the world.
            </h1>
            <h2>
              Plan your trip with us to the world’s best places in the world.
              {' '}
              Explore 200 + countries to enjoy your holiday hassle free.
              {' '}
              Book now, to explore the beauty of world for your first trip with us.
            </h2>
          </div>
          <div className="list_btn">
            <button type="button" className="sign_up_btn">
              <Link to="/sign-up"><span>Sign Up</span></Link>
            </button>
            <button type="button" className="sign_in_btn">
              <Link to="/sign-in"><span>Sign In</span></Link>
            </button>
          </div>
        </div>
        <img src={img} alt="" className="img" />
        <Footer />
      </div>
    </section>
  );
}
