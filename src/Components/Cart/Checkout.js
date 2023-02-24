import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [inputValidity,setInputValidity]=useState({
    name:true,
    street:true,
    city:true,
    postal:true

  });
  const nameInput = useRef();
  const streetInput = useRef();
  const postalInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInput.current.value;
    const enteredStreet = streetInput.current.value;
    const enteredPostal = postalInput.current.value;
    const enteredCity = cityInput.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredstreetIsValid = !isEmpty(enteredStreet);
    const enteredcityIsValid = !isEmpty(enteredCity);
    const enteredpostalIsValid = !isFiveChars(enteredPostal);

    setInputValidity({
      name :enteredNameIsValid,
      street: enteredstreetIsValid,
     city:enteredcityIsValid,
     postal:enteredpostalIsValid
    });

    const formIsvalid =
      enteredNameIsValid &&
      enteredcityIsValid &&
      enteredpostalIsValid &&
      enteredstreetIsValid;

      if(!formIsvalid){
        return;
      }
      props.onConfirm({
        name:enteredName,
        street:enteredStreet,
        city:enteredCity,
        postal:enteredPostal
      })
  };

  const nameControlClasses = `${classes.control} ${
    inputValidity.name ? '' : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    inputValidity.street ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    inputValidity.postal ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    inputValidity.city ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
        {!inputValidity.name && <p>Please enter a valid Name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
        {!inputValidity.street && <p>Street is not valid</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInput} />
        {!inputValidity.postal && <p>Postal is not valid</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
        {!inputValidity.city && <p>City is not valid</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
