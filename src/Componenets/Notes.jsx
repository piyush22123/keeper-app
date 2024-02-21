import React from 'react'
import './Styles/Style.css'
import DeleteIcon from '@mui/icons-material/Delete';

const Notes = (props) => {

  function handleClick(){
      props.onDelete(props.id) // passing this function using props
  }

  return (
    <div className= "note">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  )
}

export default Notes