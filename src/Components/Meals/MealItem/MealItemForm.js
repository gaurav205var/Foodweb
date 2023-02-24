import { useRef,useState } from 'react';
import Input from '../../UI/Input';
import './MealsItemForm.css';

const MealItemForm =(props)=>{
    const[amountIsValid,setAmount] = useState(false);
    
    const amountInputRef = useRef();

    const onSubmitHandler=(event)=>{
       event.preventDefault();
       const enteredAmount = amountInputRef.current.value;
       const enteredAmountNumber = +enteredAmount;

       if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
        setAmount(false);
        return;
       }
       props.onAddToCart(enteredAmountNumber);
    };
    return <form className="form" onSubmit={onSubmitHandler}>
        <Input 
        ref = {amountInputRef}
        label="Amount"  input={{
            id: 'amount',
            type: 'number',
            mim: '1',
            max:'5',
            step:'1',
            defaultValue:'1',
        }}/>
        <button>+ Add</button>
        {!amountIsValid || <p>Please enter a valid Amount (1-5).</p>}
    </form>
};

export default MealItemForm;