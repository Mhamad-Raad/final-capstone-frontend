import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Details from '../components/Details';

describe('Testing Details', () => {
  let details;
  beforeAll(async () => {
    details = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Details />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(details).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(details).toMatchSnapshot();
  });

  it('Should have a link to the reservation page', () => {
    const link = screen.findByTestId('reservation-link');
    waitFor(() => expect(link).toBeInTheDocument());
    waitFor(() => expect(link).toHaveAttribute('href'));
  });

  const mockTrips = [
    {
      id: 1,
      destination_city: 'New York',
      price: 500,
      rating: 4.5,
      description: 'Explore the Big Apple and all its wonders!',
      image_url: 'https://example.com/image.jpg',
    },
  ];

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ id: '1' }),
  }));

  it('Details of a trip are correctly displayed', () => {
    jest.spyOn(store, 'getState').mockReturnValue({
      trips: {
        status: 'succeeded',
        trips: mockTrips,
      },
    });

    waitFor(() => expect(getByAltText('details')).toHaveAttribute('src', 'https://example.com/image.jpg'));
    waitFor(() => expect(getByText('New York')).toBeInTheDocument());
    waitFor(() => expect(getByText('Price')).toBeInTheDocument());
    waitFor(() => expect(getByText('$500')).toBeInTheDocument());
    waitFor(() => expect(getByText('Ratings')).toBeInTheDocument());
    waitFor(() => expect(getByText('4.5/5')).toBeInTheDocument());
    waitFor(() => expect(getByText('Explore the Big Apple and all its wonders!')).toBeInTheDocument());
    waitFor(() => expect(getByText('Reserve')).toBeInTheDocument());
  });
});
