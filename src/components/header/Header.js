import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIconComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartDropdown from '../cart-dropdown/CartDropdownComponent';
import { selectCartHidden} from '../../redux/cart/cart-selectors';
import { selectCurrentUser} from '../../redux/user/user-selectors';

import { HeaderContainer, LogoContainer, OptionsConatiner, OptionLink } from './Header.styles.jsx';

const Header = ({ currentUser, hidden }) =>{
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo'/>
      </LogoContainer>
      <OptionsConatiner>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
        </OptionLink>
        {
          currentUser ? 
          <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
          :
          <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon/>
      </OptionsConatiner>
      { hidden ? null : <CartDropdown /> }
    </HeaderContainer>
  )
}

const maspStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(maspStateToProps)(Header);