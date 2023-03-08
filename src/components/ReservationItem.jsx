import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTrips } from '../redux/tripSlice';
import '../assets/stylesheets/ReservationItem.css';

export default function ReservationItem({ delay, reservation }) {
  const styles = {
    animationDuration: `${delay}s`,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const trips = useSelector((state) => state.trips.trips);

  const trip = trips.find((trip) => trip.id === reservation.trip_id);

  return (
    <li className="reservation-item row" style={styles}>
      <div className="column">
        <h2 className="destination-city">{trip?.destination_city}</h2>
        <h3 className="departure-city">{reservation.departure_city}</h3>
      </div>
      <div className="column">
        <h2 className="reservation-price">{`${trip?.price}$`}</h2>
        <h3 className="reservation-date">{reservation.date}</h3>
      </div>
    </li>
  );
}
