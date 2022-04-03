import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { Product } from '../../models/Product';
import './style.css'


const Cart: React.FC = () => {
  const [ cartItems, setCartItems ] = useState([]);
  const [cartTotalValue, setCartTotalValue] = useState<number>(0);

  const checkout = () => {
    setCartTotalValue(0);
    setCartItems([]);
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
        <h4>Cart Details</h4> : 
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
                    <div className="row" style={{fontSize: "small"}}>Total Cart Value</div>
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


