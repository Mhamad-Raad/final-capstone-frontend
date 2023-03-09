import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DeleteTrip from '../pages/DeleteTrip';

describe('RootLayout', () => {
  let deleteTrip;
  beforeAll(async () => {
    deleteTrip = renderer
      .create(
        <Provider store={store}>
          <Router>
            <DeleteTrip />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should renders correctly', () => {
    expect(deleteTrip).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(deleteTrip).toMatchSnapshot();
  });

  it('displays correct message when there are no trips', () => {
    const message = waitFor(() => screen.getByText(/Add some trips!/i));
    waitFor(() => expect(message).toBeInTheDocument());
  });
});
