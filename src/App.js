import './App.css';
import {
  Route, useNavigate, Routes, useLocation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import Trips from './components/Trips';
import { setToken } from './redux/reducers/registrationSlice';
import Landing from './pages/Landing';

const App = () => {
  const registration = useSelector((store) => store.registration);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = (localStorage.getItem('token') !== null);
    const user = (localStorage.getItem('user') !== null);

    if (token && user) {
      setToken({
        token,
        user,
      });
    } else if (location.pathname !== '/sign-up') {
      navigate('/sign-in');
    }
  }, [registration]);

  return (
    <Routes>
      <Route exact path="/sign-up" element={<Signup />} />
      <Route exact path="/sign-in" element={<SignIn />} />
      <Route exact path="/trips" element={<Trips />} />
      <Route exact path="/" element={<Landing />} />
    </Routes>
  );
};

export default App;
