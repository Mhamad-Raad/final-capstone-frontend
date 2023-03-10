import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setError } from '../redux/reducers/sessionSlice';
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
    if (email && passwordInput) {
      dispatch(fetchSignIn({
        email, password: passwordInput, navigate,
      }));
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

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">
          <input type="email" name="email" required="required" onChange={changeEmail} value={email} />
          <span>Email</span>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="password">
          <input type={passwordType} required="required" onChange={handlePasswordChange} value={passwordInput} name="password" />
          <span>Password</span>
          <button type="button" className="eye-btn" onClick={togglePassword}>
            { passwordType === 'password' ? <AiFillEyeInvisible /> : <AiFillEye /> }
          </button>
        </label>
      </div>
      <button type="submit" className="submit-btn" data-testid="login-btn" onClick={onSubmit}><span>Log In</span></button>
    </form>
  );
}
