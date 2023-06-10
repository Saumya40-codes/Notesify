import React, { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import NotePage from './NotePage';

const NotesListPage = () => {

  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async() => {
    let resp = await fetch('/api/notes/');
    let data = await resp.json();
    console.log(data);
    setNotes(data);
  };

  return (
    <div>
    <div>
      {notes.map((note, index) => (
        <ListItem key={index} note = {note} />
      ))}
      </div>
    </div>
  );
};

export default NotesListPage;
