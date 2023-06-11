import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({note}) => {
  let title = String(note.body).substring(0, 15);
  if(String(note.body).length > 15) title += '...';

  let getTime = (date) => {
    return new Date(note.updated).toLocaleString();
  }

  return (
    <Link to={`/note/${note.id}`}>         
      <div className='notes-list-item'>
        <h3>{title}</h3>
        <p>Last Updated: {getTime(note)}</p>
      </div>  
    </Link>
  )
}

export default ListItem
