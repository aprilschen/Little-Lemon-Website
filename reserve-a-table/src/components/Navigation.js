export default function Navigation() {
    return (
        <nav>
            <menu className="navbar-menu">
                <li className="image-nav"><img src={require('../assets/nav-logo.png')} alt="Little Lemon logo"></img></li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservation</li>
                <li>Order Online</li>
                <li>Login</li>
            </menu>
        </nav>
    );
}