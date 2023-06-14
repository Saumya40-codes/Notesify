import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
const Header = () => {
  let {user} = useContext(AuthContext);
  let {logout} = useContext(AuthContext);
  useEffect(() => {
    const text = document.querySelector('.lst-note');
    const textContent = text.textContent;
    const chars = textContent.split('');

    text.textContent = '';
    chars.forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.animationDelay = `${index * 0.1}s`;
      text.appendChild(span);
    });
  }, []);

  return (
    <div className='app-header'>
      <h1>
        <span className='lst-note'>Note List</span>
      </h1>
      {/* {user? (
        <p onClick={logout}>Logout</p>
      ):(
        <p>Login</p>
      )} */}
    </div>
  );
};

export default Header;
