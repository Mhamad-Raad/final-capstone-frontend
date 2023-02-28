import ReservationItem from './ReservationItem';
import './MyReservations.css';

export default function MyReservations() {
  return (
    <ul className="my-reservations column">
      <ReservationItem />
      <ReservationItem />
      <ReservationItem />
    </ul>
  );
}
