import React, { useEffect } from 'react';

const AddFontNames = ({ note, setNote }) => {
  useEffect(() => {
    const savedFont = localStorage.getItem('noteFont');
    if (savedFont) {
      setNote({ ...note, font: savedFont });
    }
  }, []);

  const handleFontChange = (e) => {
    const newFont = e.target.value;
    setNote({ ...note, font: newFont });
    localStorage.setItem('noteFont', newFont);
  };

  return (
    <div>
      <div className='font-style'>
        <label htmlFor="font-select"></label>
        <select id="font-select" value={note.font} onChange={handleFontChange} className='sel'>      
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Lucida Console">Lucida Console</option>
          <option value="Garamond">Garamond</option>
          <option value="Brush Script MT">Brush Script MT</option>
          <option value="Roboto">Roboto</option>
          <option value="Cursive">Cursive</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Monospace">Monospace</option>
          <option value="Serif">Serif</option>
          <option value="Sans-serif">Sans-serif</option>
          <option value="Script MT Bold">Script MT Bold</option>
          <option value="Impact">Impact</option>
          <option value="Georgia">Georgia</option>
          <option value="Palatino">Palatino</option>
          <option value="Bookman">Bookman</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
          <option value="Lucinda Handwriting">Lucinda Handwriting</option>
          <option value="Bradley Hand ITC">Bradley Hand ITC</option>
          <option value="Blackadder ITC">Blackadder ITC</option>
          <option value = "Lucinda Calligraphy">Lucinda Calligraphy</option>
        </select>
      </div>
    </div>
  );
};

export default AddFontNames;