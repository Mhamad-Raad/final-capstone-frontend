import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import Error from '../components/Error';
import '../assets/stylesheets/registration.css';
import img from '../assets/images/bg-2.jpg';

const SignIn = () => (
  <section className="session-page">
    <div className="img-div">
      {' '}
      <img src={img} alt="" className="image" />
    </div>
    <div className="form-container">
      <h1>Sign In</h1>
      <Error />
      <SignInForm />
      <p>
        Do not have an account?
        <Link to="/Sign-up" className="link"> Sign Up</Link>
      </p>
    </div>
  </section>
);

export default SignIn;
