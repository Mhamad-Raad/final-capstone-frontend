import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SignInForm from '../components/SignInForm';
import Error from '../components/Error';
import { setError } from '../redux/reducers/sessionSlice';
import '../assets/stylesheets/session.css';

const SignIn = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setError({
        msg: ' ',
        value: ' ',
        details: [],
      }),
    );
  }, []);

  return (
    <section className="session-page">
      <div className="overlay">
        <div className="form-container">
          <div className="image" />
          <div className="text-column">
            <h1>Your account awaits!</h1>
            <h2>Sign in to access all the good stuff.</h2>
            <Error />
            <SignInForm />
            <p>
              Do not have an account?
              <Link to="/sign-up" className="link"> Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
