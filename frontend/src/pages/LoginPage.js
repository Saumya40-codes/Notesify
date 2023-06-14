import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
    let {login} = useContext(AuthContext);
  return (
    <div className='login'>
      <form onSubmit={login}>
        <input type='text' name='username' placeholder='Enter your username' />
        <input type='password' name='password' placeholder='Enter your password' />
        <button type='submit'>Login</button>
        <a href='/register'>Register</a>
      </form>
    </div>
  )
}

export default LoginPage
