
export default function Footer() {
    return (
        <footer>
            <menu className="footer-menu">
                <li className="img-footer">
                    <img src={require('../assets/footer-logo.png')} alt="Little Lemon logo"></img>
                </li>
                <li>
                    <h2>Navigation</h2>
                    <ul className="footer-links">
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </li>
                <li>
                    <h2>Contact</h2>
                    <ul className="footer-links">
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </li>
                <li>
                    <h2>Connect</h2>
                    <ul className="footer-links">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Join us!</li>
                    </ul>
                </li>
            </menu>
        </footer>
    );
}