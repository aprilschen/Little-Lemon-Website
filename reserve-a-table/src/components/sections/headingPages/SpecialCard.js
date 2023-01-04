import {Link} from 'react-router-dom';
import Bike from '../../../assets/bike.png';
export default function SpecialCard(props) {
    return (
        <article className="menu-card">
            <img src={props.image} alt="Special Menu"></img>
            <h1>{props.name}</h1>
            <h3>{props.price}</h3>
            <p>{props.description}</p>
            <Link className="hover-effect" to="/order"><h1>Order for Delivery</h1></Link>
            <img src={Bike} alt="delivery Icon"></img>
        </article>
    );
}