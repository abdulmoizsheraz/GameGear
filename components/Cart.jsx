import React from 'react';
import {FaWindowClose }from 'react-icons/fa';
import { useSelector } from 'react-redux';
// const items = useSelector(state => state.cart.items);
const Cart = ({toggle,settoggle}) => {
const closecart=()=>
{
settoggle(false)
}  
return (
    <>
    <div class="cart ">
    <div class="cart__header">
      <h2>My Cart</h2>
      <button onClick={closecart}><FaWindowClose/></button>
    </div>
    <div class="cart__items">
      {/* {items.map((title,image,price)=>{
      <div class="cart__item">
        <img src="https://via.placeholder.com/150x150" alt="Product Image"/>
        <div class="cart__item-details">
          <h3>Product Name</h3>
          <p>Price: $19.99</p>
          <button class="cart__remove-btn">Remove</button>
        </div>
      </div>
      })} */}
      No items
     
    </div>
    <div class="cart__subtotal">
      <p>Subtotal: $44.98</p>
      <button class="cart__checkout-btn">Checkout</button>
    </div>
  </div>
    </>
  )
}

export default Cart