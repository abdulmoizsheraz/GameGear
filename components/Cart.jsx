import React from 'react';
import {FaWindowClose }from 'react-icons/fa';
import { useSelector } from 'react-redux';
// const items = useSelector(state => state.cart.items);
const Cart = ({toggle,settoggle}) => {
const closecart=()=>
{
settoggle(false)
}  
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
console.log(cartItems)
return (
    <>
    <div class="cart ">
    <div class="cart__header">
      <h2>My Cart</h2>
      <button onClick={closecart}><FaWindowClose/></button>
    </div>
    <div class="cart__items">
    {cartItems.map((item) => (
            <div className="cart__item" key={item.id}>
              <img src={item.image} alt="Product Image" />
              <div className="cart__item-details">
                <h3>{item.title}</h3>
                <p>Price: {item.price}</p>
                <button className="cart__remove-btn">Remove</button>
              </div>
            </div>
          ))}
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