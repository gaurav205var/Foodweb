import React from "react";


const CartContext = React.createContext({
    title:[],
    totalAmount: 0,
    addItem:(item)=>{},
    removeItem:(item)=>{},
    clearCart: () =>{}
});

export default CartContext;


