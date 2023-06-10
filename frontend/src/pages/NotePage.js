import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const NotePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  let [note, setNote] = useState(null);
  let [title, setTitle] = useState('');

  useEffect(() => {
    getNote();
  }, [id]);

  let getNote = async () => {
    if( id != 'new'){
    let response = await fetch(`/api/notes/${id}`);
    let data = await response.json();
    setNote(data);
    let title = String(data.body).split('\n')[0];
    setTitle(title);
    }
  };

  let updateNote = async () => {
    await fetch(`/api/notes/${id}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    });
  };

  let handleSubmit = async (e) => {
    await updateNote();
    navigate('/');
  };

  let delNotes = async() => {
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
    <div className='note'>
      <div className='note-header'>
        <h3>
            <a onClick={handleSubmit}> &#x2B05; </a>
        </h3> 
        {title == '' ? 'No Title': title}
        <h4>
       { note ? <button onClick={delNotes}> Delete &#x1F5D1; </button> : <Link to='/'> <button> Add </button></Link> }
        </h4>
      </div>
      <textarea defaultValue={note?.body} onChange={(e) => setNote({ ...note, 'body': e.target.value })}></textarea>
    </div>
  );
};

export default NotePage;
