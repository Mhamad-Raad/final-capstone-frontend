import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../assets/stylesheets/root.css';
import Footer from './Footer';
import logo from '../assets/images/logo.png';

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
        <img className="desk-nav-logo" src={logo} alt="app-logo" />
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
          <Footer />
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
            <img className="desk-nav-logo" src={logo} alt="app-logo" />
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
              <Footer />
            </div>
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default RootLayout;
