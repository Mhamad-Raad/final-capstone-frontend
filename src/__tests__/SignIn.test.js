import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SignIn from '../pages/SignIn';

describe('Testing SignIn', () => {
  let signin;
  beforeAll(async () => {
    signin = renderer
      .create(
        <Provider store={store}>
          <Router>
            <SignIn />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(signin).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(signin).toMatchSnapshot();
  });

  it('renders the email input field', () => {
    const emailInput = waitFor(() => screen.getByLabelText('Email'));
    waitFor(() => expect(emailInput).toBeInTheDocument());
    waitFor(() => expect(emailInput.type).toBe('email'));
    waitFor(() => expect(emailInput.required).toBe(true));
  });

  it('renders the password input field', () => {
    const passwordInput = waitFor(() => screen.getByLabelText('Password'));
    waitFor(() => expect(passwordInput).toBeInTheDocument());
    waitFor(() => expect(passwordInput.type).toBe('password'));
    waitFor(() => expect(passwordInput.required).toBe(true));
  });
});
