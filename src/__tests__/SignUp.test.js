import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SignUp from '../pages/Signup';

describe('Testing SignUp', () => {
  let signup;
  beforeAll(async () => {
    signup = renderer
      .create(
        <Provider store={store}>
          <Router>
            <SignUp />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(signup).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(signup).toMatchSnapshot();
  });

  it('Should have a button with sign up text', () => {
    const btn = screen.findByTestId('submit');
    waitFor(() => expect(btn).toHaveTextContent('Sign up'));
  });

  it('renders "Sign In" link', () => {
    const link = screen.findByTestId('Sign In');
    waitFor(() => expect(link).toBeInTheDocument());
    waitFor(() => expect(link).toHaveAttribute('href', '/sign-in'));
  });

  it('renders all form fields', () => {
    waitFor(() => expect(screen.getByLabelText('Full Name')).toBeInTheDocument());
    waitFor(() => expect(screen.getByLabelText('Email')).toBeInTheDocument());
    waitFor(() => expect(screen.getByLabelText('Password')).toBeInTheDocument());
    waitFor(() => expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument());
  });
});
