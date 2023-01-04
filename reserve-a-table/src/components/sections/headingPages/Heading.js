import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link to="/reservations"><h1>Reserve a table</h1></Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/food/food1.png')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}