import {Link} from 'react-router-dom';
export default function Navbar() {
    return (
        <nav>
            <menu className="navbar-menu">
                <Link to="/"><img src={require('../assets/nav-logo.png')} alt="Little Lemon logo" className="nav-image"></img></Link>
                <Link className="hover-effect" to="/">Home</Link>
                <Link className="hover-effect" to="/about">About</Link>
                <a className="hover-effect" href={require('../assets/menu.jpeg')} target="_blank" rel="noreferrer">Menu</a>
                <Link className="hover-effect" to="/reservations">Reservations</Link>
                <Link className="hover-effect" to="/order">Order</Link>
                <Link className="hover-effect" to="/login">Login</Link>
            </menu>
        </nav>
    );
}