import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import Error from '../components/Error';
import '../assets/stylesheets/registration.css';
import img from '../assets/images/bg-2.jpg';

const SignUp = () => (
  <section className="session-page">
    <div className="img-div">
      {' '}
      <img src={img} alt="" className="image" />
    </div>
    <div className="form-container">
      <h1>Sign Up</h1>
      <Error />
      <SignUpForm />
      <p>
        Already have an account?
        <Link to="/Sign-in" className="link"> Sign In</Link>
      </p>
    </div>
  </section>
);

export default SignUp;
