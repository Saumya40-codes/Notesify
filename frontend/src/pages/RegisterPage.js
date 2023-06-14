import React from 'react'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const RegisterPage = () => {
    const {register} = useContext(AuthContext);
  return (
    <div className='login'>
        <form onSubmit={register}>
        <div className='frm'>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' placeholder='Create your username' required/>
        </div>
        <div className='frm'>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' placeholder='Enter your password' required/>
        </div>
        <div className='frm'>
          <div className='center-button'>
            <button type='submit' className='btn-submit'>Register</button>
          </div>
        </div>
        <p className='acc'>Already have an account?</p>
        <a href='/login'>Login</a>
      </form>
    </div>
  )
}

export default RegisterPage
