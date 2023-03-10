import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ReserveForm from '../components/ReserveForm';

describe('Testing Reserve Form', () => {
  const trips = [
    { id: 1, destination_city: 'New York', description: 'The city that never sleeps' },
    { id: 2, destination_city: 'Paris', description: 'The city of love' },
  ];
  const trip = trips[0];

  beforeAll(() => {
    const user = { id: 1, name: 'John Doe' };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', 'fake-token');
  });

  afterAll(() => {
    localStorage.clear();
  });

  let reserveForm;

  beforeAll(async () => {
    reserveForm = render(
      <Provider store={store}>
        <Router>
          <ReserveForm trip={trip} trips={trips} />
        </Router>
      </Provider>,
    );
    const formElement = screen.getByTestId('form');
    expect(formElement).toBeInTheDocument();
  });

  it('should renders correctly', () => {
    expect(reserveForm).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(reserveForm).toMatchSnapshot();
  });

  it('displays the destination name if trip prop is provided', () => {
    const destinationName = waitFor(() => screen.getByText('New York'));
    waitFor(() => expect(destinationName).toBeInTheDocument());
  });

  it('displays the correct title', () => {
    const title = screen.findByTestId('reserve-title');
    waitFor(() => expect(title).toBeInTheDocument());
  });
});
