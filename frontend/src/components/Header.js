import React, { useEffect } from 'react';

const Header = () => {
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
    </div>
  );
};

export default Header;
