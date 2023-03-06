import { Outlet, Link } from 'react-router-dom';
import '../assets/stylesheets/root.css';

const RootLayout = () => (
  <div className="root-layout">
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
        <li>
          <Link to="/trips/:id">Details Page</Link>
        </li>
        <li>
          <Link to="/delet-trip/:id">Delete a Trip</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default RootLayout;
