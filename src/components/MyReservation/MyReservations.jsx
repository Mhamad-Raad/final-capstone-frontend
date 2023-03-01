import { useDispatch } from 'react-redux';
import { getAllReversedTrips } from '../../redux/reserveSlice';
import ReservationItem from './ReservationItem';
import './MyReservations.css';

export default function MyReservations() {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(getAllReversedTrips());
  };

  return (
    <ul className="my-reservations column">
      <ReservationItem delay="1" />
      <ReservationItem delay="1.2" />
      <ReservationItem delay="1.3" />
      <button onClick={clickHandler} type="button">hi</button>
    </ul>
  );
}
