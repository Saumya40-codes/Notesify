import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
    let {login} = useContext(AuthContext);
  return (
    <div className='login'>
    <form onSubmit={login}>
    <div className='frm'>
    <label htmlFor='username'>Username</label>
    <input type='text' name='username' placeholder='Enter your username' required/>
    </div>
    <div className='frm'>
    <label htmlFor='password'>Password</label>
    <input type='password' name='password' placeholder='Enter your password' required />
    </div>
    <div className='frm'>
      <div className='center-button'>
        <button type='submit' className='btn-submit'>Login</button>
      </div>
    </div>
    <p className='acc'>New Here?</p>
    <a href='/register'>Get Registered</a>
  </form>
</div>
  )
}

export default LoginPage
