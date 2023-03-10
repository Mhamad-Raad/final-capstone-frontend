import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AddTripForm from '../components/AddTripForm';

describe('Testing Add Trip', () => {
  let addTrip;

  beforeAll(async () => {
    addTrip = renderer
      .create(
        <Provider store={store}>
          <Router>
            <AddTripForm />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(addTrip).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(addTrip).toMatchSnapshot();
  });

  it('renders the form', () => {
    const form = screen.findByTestId('form');
    waitFor(() => expect(form).toBeInTheDocument());
  });

  it('Should have a button with Add Trip text', () => {
    const btn = screen.findByTestId('addtrip-btn');
    waitFor(() => expect(btn).toHaveTextContent('Add Trip'));
  });
});
