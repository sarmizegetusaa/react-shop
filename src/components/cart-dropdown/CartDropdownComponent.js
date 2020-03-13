import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';

import './CartDropdown.styles.scss';

const Cart = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
      }
    </div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
)

const mapStateToProps = ({ cart: {cartItems} }) => ({
  cartItems
})

export default connect(mapStateToProps)(Cart);