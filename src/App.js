import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Signup from './components/Signup';
import Trips from './components/Trips';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/sign-up" element={<Signup />} />
      <Route exact path="/trips" element={<Trips />} />
    </Routes>
  </Router>
);

export default App;
