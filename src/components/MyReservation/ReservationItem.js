import './ReservationItem.css';

export default function ReservationItem() {
  return (
    <li className="reservation-item row">
      <div className="column">
        <h2 className="destination-city">Destination city</h2>
        <h3 className="departure-city">Departure city</h3>
      </div>
      <div className="column">
        <h2 className="reservation-price">Reservation price</h2>
        <h3 className="reservation-date">Reservation date</h3>
      </div>
    </li>
  );
}
