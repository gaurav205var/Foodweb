import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import './Header.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h2>ReactMeal</h2>
        <HeaderCartButton onClick={props.onShow}/>
      </header>
      <div className="main">
        <img className="main-image" src={mealsImage} alt="A Table full of delicious food" height='550px' width='1535px'/>
      </div>
    </Fragment>
  );
};

export default Header;
