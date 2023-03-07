import { Outlet, NavLink } from 'react-router-dom';
import '../assets/stylesheets/root.css';

const RootLayout = () => (
  <div className="root-layout">
    <nav className="desktop-nav column">
      <ul className="column">
        <li>
          <NavLink to="home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add-trip">Add New Trip</NavLink>
        </li>
        <li>
          <NavLink to="/my-reservations">My Reservations</NavLink>
        </li>
        <li>
          <NavLink to="/delete-trip">Delete a Trip</NavLink>
        </li>
        <li>
          <NavLink to="0/reserve">
            Reserve a Trip
          </NavLink>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default RootLayout;
