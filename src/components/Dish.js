import Delivery from "../assets/icon-delivery.svg";
import "../style/dish.css";

function Dish({dishName, price, description}) {
    return (
        <div class="dish">
            <div class="img-holder"></div>
            <div class="content">
                <div class="head">
                    <h3>{dishName}</h3>
                    <span>{price}</span>
                </div>
                <p>{description}</p>
                <div class="order">
                    <a class="line-button">Order a delivery</a>
                    <img src={Delivery} alt="delivery icon"/>
                </div>
            </div>
        </div>
    )
}

export default Dish;
