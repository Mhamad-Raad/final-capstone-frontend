import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import Error from '../components/Error';

const SignIn = () => (
  <section className="signup_page">
    <h1>Sign In</h1>
    <SignInForm />
    <p>
      Do not have an account?
      <Link to="/Sign-up">Sign Up</Link>
    </p>
    <Error />
  </section>
);

export default SignIn;
