import React, { Component, useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import './SignIn.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = ({ emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: ""})
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({email: '', password:''})
    } catch(error) {
      console.log(error)
    }


  }
  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value});
  }
  return (
    <div className='sign-in'>
      <h2> I alredy have an account</h2>
      <span>Sign in with your email and password</span>
      
      <form onSubmit={handleSubmit}>
        <FormInput 
          name='email'
          type='email'
          label='Email'
          value={email}
          handleChange={handleChange}
          required 
        />
        <FormInput 
          name='password' 
          type='password'
          label='Password'
          value={password}
          handleChange={handleChange}
          required 
          />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {' '}
            Sign In with Google{' '}
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
export default SignIn;