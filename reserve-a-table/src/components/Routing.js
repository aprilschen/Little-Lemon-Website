import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Reservation from './pages/BookingPage';
import Order from './pages/Order';
import Login from './pages/Login';

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element= {
            <Homepage />
            } />

            <Route path="/about" element={
            <About />
            } />

            <Route path="/reservations" element= {
            <Reservation />
            } />

            <Route path="/order" element= {
            <Order />
            } />

            <Route path="/login" element= {
            <Login />
            } />
        </Routes>
    );
}