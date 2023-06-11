import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const NotePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState({ body: '' });
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (id !== 'new') {
      getNote();
    }
  }, [id]);

  const getNote = async () => {
    if(id === 'new') return
    const response = await fetch(`/api/notes/${id}`);
    const data = await response.json();
    setNote(data);
    let noteTitle = String(data.body).substring(0, 15);
    if(data.body.length > 15) noteTitle += '...';
    setTitle(noteTitle);
  };

  const updateNote = async () => {
    await fetch(`/api/notes/${id}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    });
  };

  let createNote = async () => {
    fetch(`/api/notes/create/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
}

const handleSubmit = async () => {  
  if(id !== 'new' && note.body === ''){
    setTitle('No Title');
    await updateNote();
  }
  else if (id !== 'new') {
    updateNote();
  }
  else if (id === 'new' && note != null) {
    createNote();
  }
  navigate('/');
};


  const deleteNote = async () => {
    await fetch(`/api/notes/${note.id}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    });
    navigate('/');
  };

  return (
    <div className="note" >
        <div className="note-header">
        <h3>
          <a onClick={handleSubmit}> &#x2B05; </a>
        </h3>

        {title === '' ? 'No Title' : title}
            {id !== 'new' ? (
                <button onClick={deleteNote}>Delete</button>
            ) : (
                <button onClick={handleSubmit}>Add</button>
            )}

        </div>
        <textarea defaultValue={note?.body} onChange={(e) => setNote({ ...note, 'body': e.target.value })}></textarea>
    </div>
)
}

export default NotePage;