import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
// import App from './App';

import MyReservations from './components/MyReservation/MyReservations';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyReservations />);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
