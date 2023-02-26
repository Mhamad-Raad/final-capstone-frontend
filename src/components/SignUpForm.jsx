import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSignUp } from '../redux/reducers/signUp';
import { setError } from '../redux/reducers/registrationSlice';

export default function SignUpForm() {
  const [passwordType, setPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changeName = (event) => {
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (name && email && passwordInput && confirmPasswordInput) {
      if (passwordInput !== confirmPasswordInput) {
        dispatch(
          setError({
            msg: 'Unable to create an account',
            value: 'Passwords do not match',
            details: [],
          }),
        );
      } else {
        dispatch(fetchSignUp({
          name, email, password: passwordInput, confirmPassword: confirmPasswordInput, navigate,
        }));
      }
    } else {
      dispatch(
        setError({
          msg: 'Cannot submit',
          value: 'Please fill all fields',
          details: [],
        }),
      );
    }
  };

  return (
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
  );
}
