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
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default RootLayout;
