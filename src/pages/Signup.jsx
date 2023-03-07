import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import Error from '../components/Error';
import { setError } from '../redux/reducers/sessionSlice';
import '../assets/stylesheets/session.css';

const SignUp = () => {
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
    <section className="session-page signup">
      <div className="overlay">
        <div className="form-container">
          <div className="text-column">
            <h1>Create an account now!</h1>
            <h2>Your next adventure starts here!</h2>
            <Error />
            <SignUpForm />
            <p>
              Already have an account?
              <Link to="/sign-in" className="link"> Sign In</Link>
            </p>
          </div>
          <div className="image" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
