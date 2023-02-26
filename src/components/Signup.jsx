import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { fetchRegistration } from '../redux/sign_up/signupSlice';

const Signup = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPasswordInput(event.target.value);
  };

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const toggleConfirmPassword = () => {
    if (confirmPasswordType === 'password') {
      setConfirmPasswordType('text');
      return;
    }
    setConfirmPasswordType('password');
  };

  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchRegistration({
      name, email, password: passwordInput, confirmPassword: confirmPasswordInput,
    }));
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changeName = (event) => {
    setName(event.target.value);
  };

  return (
    <section className="signup_page">
      <h1>signup</h1>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" onChange={changeName} value={name} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" onChange={changeEmail} value={email} />
        </label>
        <label htmlFor="password">
          Password:
          <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className="form-control" placeholder="Password" />
          <button type="button" className="btn btn-outline-primary" onClick={togglePassword}>
            { passwordType === 'password' ? <AiFillEyeInvisible /> : <AiFillEye /> }
          </button>
        </label>
        <label htmlFor="password">
          Confirm Password:
          <input type={confirmPasswordType} onChange={handleConfirmPasswordChange} value={confirmPasswordInput} name="password" className="form-control" placeholder="Password" />
          <button type="button" className="btn btn-outline-primary" onClick={toggleConfirmPassword}>
            { confirmPasswordType === 'password' ? <AiFillEyeInvisible /> : <AiFillEye /> }
          </button>
        </label>
        <button type="submit" className="submit_btn" onClick={onSubmit}>Submit</button>
      </form>
    </section>
  );
};

export default Signup;
