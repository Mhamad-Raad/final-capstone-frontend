import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MyReservations from '../pages/MyResevationsPage';

describe('RootLayout', () => {
  let myReservation;
  beforeAll(async () => {
    myReservation = renderer
      .create(
        <Provider store={store}>
          <Router>
            <MyReservations />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(myReservation).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(myReservation).toMatchSnapshot();
  });

  test('renders the component with the correct heading', () => {
    const heading = waitFor(() => screen.getByRole('heading', { name: 'Adventure Awaits' }));
    waitFor(() => expect(heading).toBeInTheDocument());
  });
});
