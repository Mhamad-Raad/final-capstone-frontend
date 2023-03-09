import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RootLayout from '../components/Root';

describe('RootLayout', () => {
  let root;
  beforeAll(async () => {
    root = renderer
      .create(
        <Provider store={store}>
          <Router>
            <RootLayout />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(root).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(root).toMatchSnapshot();
  });
  it('renders desktop navigation menu items', () => {
    waitFor(() => expect(getByText('Home')).toBeInTheDocument());
    waitFor(() => expect(getByText('Add New Trip')).toBeInTheDocument());
    waitFor(() => expect(getByText('My Reservations')).toBeInTheDocument());
    waitFor(() => expect(getByText('Delete a Trip')).toBeInTheDocument());
    waitFor(() => expect(getByText('Reserve a Trip')).toBeInTheDocument());
  });
});
