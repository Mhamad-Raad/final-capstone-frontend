import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../assets/stylesheets/root.css';

const RootLayout = () => {
  const location = useLocation();
  const { pathname } = location;
  const isReserve = pathname.includes('reserve');

  const [opened, setOpened] = useState(false);

  const closeHandler = () => {
    setOpened(false);
  };

  const openHandler = () => {
    setOpened(true);
  };

  return (
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
            <NavLink to="/reserve/0" className={isReserve ? 'active' : ''}>
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
      <nav className="mobile-nav column">
        {!opened && (
        <button
          className="hamburger column"
          onClick={openHandler}
          type="button"
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </button>
        )}

        {opened && (
          <button
            className="close"
            onClick={closeHandler}
            type="button"
          >
            <div className="line1" />
            <div className="line2" />
          </button>
        )}
        {opened && (
          <div className="overlay column">
            <h1 className="mob-nav-logo">Travel App</h1>
            <ul className="column">
              <li>
                <NavLink to="home" onClick={closeHandler}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/add-trip" onClick={closeHandler}>Add New Trip</NavLink>
              </li>
              <li>
                <NavLink to="/my-reservations" onClick={closeHandler}>My Reservations</NavLink>
              </li>
              <li>
                <NavLink to="/delete-trip" onClick={closeHandler}>Delete a Trip</NavLink>
              </li>
              <li>
                <NavLink to="/reserve/0" className={isReserve ? 'active' : ''} onClick={closeHandler}>
                  Reserve a Trip
                </NavLink>
              </li>
            </ul>
            <div className="mob-copy-right column">
              <p>
                &copy; 2021 Travel App made by
              </p>
              <div className="creator-names row">
                <a href="https://www.linkedin.com/in/mhamad-raad">Mhamad Raad</a>
                <a href="https://www.linkedin.com/in/shaker-abady">Shaker Abady</a>
                <a href="https://www.linkedin.com/in/kanza-tahreem/">Kanza Tahreem</a>
              </div>
            </div>
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default RootLayout;
