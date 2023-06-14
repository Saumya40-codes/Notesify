import React from 'react'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const RegisterPage = () => {
    const {register} = useContext(AuthContext);
  return (
    <div className='login'>
        <form onSubmit={register}>
        <input type='text' name='username' placeholder='Create your username' />
        <input type='password' name='password' placeholder='Enter your password' />
        <button type='submit'>Register</button>
        <a href='/login'>Login</a>
      </form>
    </div>
  )
}

export default RegisterPage
