import './ReservationItem.css';

export default function ReservationItem({ delay }) {
  const styles = {
    animationDuration: `${delay}s`,
  };

  return (
    <li className="reservation-item row" style={styles}>
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
