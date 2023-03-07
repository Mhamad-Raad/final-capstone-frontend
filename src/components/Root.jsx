import { Outlet, NavLink } from 'react-router-dom';
import '../assets/stylesheets/root.css';

const RootLayout = () => (
  <div className="root-layout">
    <nav className="desktop-nav column">
      <h1 className="desk-nav-logo">Travel App</h1>
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
      <div className="desk-copy-right column">
        <p>
          &copy; 2021 Travel App made by:
        </p>
        <div className="creator-names row">
          <a href="https://www.linkedin.com/in/mhamad-raad">Mhamad Raad</a>
          <a href="https://www.linkedin.com/in/shaker-abady">Shaker Abady</a>
          <a href="https://www.linkedin.com/in/kanza-tahreem/">Kanza Tahreem</a>
        </div>
      </div>
    </nav>
    <Outlet />
  </div>
);

export default RootLayout;
