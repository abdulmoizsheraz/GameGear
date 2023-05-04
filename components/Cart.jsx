import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/Slices/CartSlice';

const Cart = ({ toggle, settoggle }) => {
  const dispatch = useDispatch();
  const closecart = () => {
    settoggle(false)
  }

  const cartItems = useSelector(state => state.cart.items);

  const removeItem = (id) => {
    dispatch(removeFromCart({ id }));
  }

  return (
    <>
      <div class="cart ">
        <div class="cart__header">
          <h2>My Cart</h2>
          <button onClick={closecart}><FaWindowClose /></button>
        </div>
        <div class="cart__items">
          {cartItems.map((item) => (
            <div className="cart__item" key={item.id}>
              <img src={item.image} alt="Product Image" />
              <div className="cart__item-details">
                <h3>{item.title}</h3>
                <p>Price: {item.price}</p>
                <button className="cart__remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
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

export default Cart;
