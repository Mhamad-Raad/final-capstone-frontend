import { Link } from "react-router-dom";

const navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/add-trip">Add New Trip</Link>
        </li>
        <li>
          <Link to="/my-reservations">My Reservations</Link>
        </li>
      </ul>
    </nav>
  );
}