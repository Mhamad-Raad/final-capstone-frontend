import ReservationItem from './ReservationItem';
import './MyReservations.css';

export default function MyReservations() {
  return (
    <ul className="my-reservations column">
      <ReservationItem delay="1" />
      <ReservationItem delay="1.2" />
      <ReservationItem delay="1.3" />
    </ul>
  );
}
