import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSignIn } from '../redux/reducers/signIn';

export default function SignInForm() {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordInput, setPasswordInput] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchSignIn({
      email, password: passwordInput, navigate,
    }));
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form>
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
      <button type="submit" className="submit_btn" onClick={onSubmit}>Log In</button>
    </form>
  );
}
