import React, { useState, useEffect, useContext } from 'react';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';
import NotePage from './NotePage';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const NotesListPage = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);
  const {authTokens, logout, login} = useContext(AuthContext);

  useEffect(() => {
   authTokens ? getNotes() : navigate('/login');
  }, []);

  const getNotes = async () => {
      let resp = await fetch('/api/notes/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authTokens.access}`
        },
      });
      let data = await resp.json();
      if(resp.status === 200){
        setNotes(data);
      }else if(resp.statusText === 'Unauthorized'){
        logout();
      }
  };

  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; {user && `${user.username}'s notes `}</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>

      <div className='notes-list'>
        {notes && notes.map((note, index) => (
          <ListItem key={index} note={note} updated={note.updated} />
        ))}
      </div>
      <AddButton />
      {/* <footer>
        <p onClick={logout()}>Logout</p>
      </footer> */}
    </div>
  );
};

export default NotesListPage;
