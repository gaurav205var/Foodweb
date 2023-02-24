import { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./MealItem.css";
import MealItemForm from './MealItemForm';


const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);

  const onAddToCartHandler = amount=>{
    cartCtx.addItem({
      id:props.id,
      amount:amount,
      price:props.price,
      name:props.name
    })
  };

  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
      <MealItemForm onAddToCart={onAddToCartHandler}/>
      </div>
    </li>
  );
};

export default MealsItem;
