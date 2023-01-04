import SpecialCard from "./SpecialCard";
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import Carousel from './SpecialsCarousel';

export default function Specials() {
    return (
        <>
            <h1>This weeks specials</h1>
            <a className="hover-effect" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>

            <section className="specials">
                <section className="specials-cards">
                        <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Feta Cheese, tomato, lettuce"/>
                        <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Bread, mango, green onions"/>
                        <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Lemon bread, vanilla Icing"/>
                </section>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </>
    );
}