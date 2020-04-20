import React from 'react';
import './SignInSignOut.styles.scss';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

export default function SignInSignOut() {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn/>
      <SignUp/>
    </div>
  )
}
