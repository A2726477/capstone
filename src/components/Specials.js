import Dish from "./Dish";
import "../style/specials.css";

function Specials() {
    const data = [
    	{id: 1, name: "Greek Salad", price: "$12.99", description: "The famous greek crispy lettuce, peppers and our Chicago style cheese, garnished with crunchy garlic and rosemary croutons."},
    	{id: 2, name: "Bruschetta", price: "$5.99", description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."},
    	{id: 3, name: "Lemon Dessert", price: "$5.00", description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
    ];
    const dishTemp = data.map(({id, name, price, description}) => {
    	return <Dish key={id} dishName={name} price={price} description={description} />;
    });
    return (
    <>
        <section class="specials">
        <div class="heading">
            <h2>Specials</h2>
            <a class="button">Online Menu</a>
        </div>
        <div class="dishes">{dishTemp}</div>
        </section>
    </>
    )
}

export default Specials;
