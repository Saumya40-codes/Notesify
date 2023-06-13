import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
    let {login} = useContext(AuthContext);
  return (
    <div>
      <form onSubmit={login}>
        <input type='text' name='username' placeholder='Enter your username' />
        <input type='password' name='password' placeholder='Enter your password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
