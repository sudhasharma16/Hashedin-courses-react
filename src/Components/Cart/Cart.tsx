import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react'
import { Product } from '../../models/Product';
import './style.css'
import {CartContext} from "../Context/CardStateProvider"
import { CartContextType } from '../Context/CardStateProvider';


const Cart: React.FC = () => {
  const [cartTotalValue, setCartTotalValue] = useState<number>(0);

  const cartState = useContext(CartContext) as CartContextType;
  const {cartItems, addToCart} = cartState;
  console.log("Cart Component", cartState);

  const checkout = () => {
    setCartTotalValue(0);
  }
  const currencyFormat = () => {
    if(cartTotalValue == 0) {
      return '₹ 0';
    }
      return '₹' + cartTotalValue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '₹1,')
  }

  return (
    <div className="card pt-3 mt-2">
    <h6>Your Cart Details</h6>
    <hr style={{marginLeft: "5%"}}/>

    { cartItems.length > 0 ? 
        <div>
          <h4>Cart Details</h4>
          <ul>
            {cartItems.map((item) => {
              return <li>{item.title} {item.price}</li>
            })}
          </ul>
        </div> : 
        <div style={{fontSize: "smaller", padding: "3%"}}><i>Your cart is empty right now. Please add courses in the cart from the list</i></div>
    }
    {/* <div *ngIf="cartItems.length === 0" style="font-size: smaller; padding: 3%;"><i>Your cart is empty right now. Please add courses in the cart from the list</i></div>
    <ul *ngIf="cartItems.length > 0" class="list-group">
        <li class="list-group-item" *ngFor="let item of cartItems">
            <app-cart-item [cartItem] = "item"></app-cart-item>
        </li>
    </ul> */}
    <ul>
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div className="row" style={{fontSize: "small"}}>Total Cart Value: {cartItems.reduce((acc, current) => {
                      return acc + current.price;
                    }, 0)}</div>
                    <div className="row">{ currencyFormat }</div>
                </div>
                <Link to='/courses' onClick={checkout}>Go to checkout</Link>
            </div>
        </li>
    </ul>
    
</div>
  )
}

export default Cart


