import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const NotePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [id]);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${id}`);
    let data = await response.json();
    setNote(data);
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

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
            <a onClick={handleSubmit}> &#x2B05; </a>
          {note?.title}
        </h3>
      </div>
      <textarea defaultValue={note?.body} onChange={(e) => setNote({ ...note, 'body': e.target.value })}></textarea>
    </div>
  );
};

export default NotePage;
