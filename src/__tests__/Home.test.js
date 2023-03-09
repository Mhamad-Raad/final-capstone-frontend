import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../components/Home';

describe('Testing Home', () => {
  let home;
  beforeAll(async () => {
    home = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(home).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(home).toMatchSnapshot();
  });

  it('renders the component', () => {
    waitFor(() => expect(screen.getByText('Explore the world')).toBeInTheDocument());
    waitFor(() => expect(screen.getByText('Find your next adventure')).toBeInTheDocument());
    waitFor(() => expect(screen.getAllByTestId('trip-card')).toHaveLength(3));
  });

  it('Should have a link to the details page', () => {
    const link = screen.findByTestId('trip-card');
    waitFor(() => expect(link).toBeInTheDocument());
    waitFor(() => expect(link).toHaveAttribute('href'));
  });
});
