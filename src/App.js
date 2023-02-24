import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from './Components/Cart/Cart'
import CartProvider from "./Components/store/CartProvider";

function App() {
  const[cartShown,SetCart]=useState(false);

   const ShowCartHandler=()=>{
    SetCart(true);
   };
   const HideCartHandler=()=>{
    SetCart(false);
   };
  return (

    
    <CartProvider>
       {cartShown && <Cart onHide={HideCartHandler}/>}
      <Header onShow={ShowCartHandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
     
    
    

  );
}

export default App;
