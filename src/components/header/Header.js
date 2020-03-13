import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import './Header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIconComponent';
import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/CartDropdownComponent';

const Header = ({ currentUser, hidden }) =>{
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo'/>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {
          currentUser ? 
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CartIcon/>
      </div>
      { hidden ? null : <CartDropdown /> }
    </div>
  )
}

const maspStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
})

export default connect(maspStateToProps)(Header);