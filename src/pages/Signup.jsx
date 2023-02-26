import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import Error from '../components/Error';

const SignUp = () => (
  <section className="signup_page">
    <h1>Sign Up</h1>
    <p>
      Already have an account?
      <Link to="/Sign-in">Sign In</Link>
    </p>
    <SignUpForm />
    <Error />
  </section>
);

export default SignUp;
