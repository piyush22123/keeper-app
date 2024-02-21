import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import './Styles/Style.css'

const NoteAdd = (props) => {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name, value} = event.target
      setNote(prevNote => {
        return{
          // copying previous object using spread operator
          ...prevNote, [name]: value // takes input name and its value (its a object)
        };
      });
  }

  function submitNote(event){
    props.onAdd(note); // passing current created note using props
    setNote({ // clear the addnote area after submitting
      title: "",
      content: ""
    })
    event.preventDefault(); // avoid default refresh of page.
  }

  return (
    <div className='noteadd'>
        <input 
         name='title'
         onChange={handleChange}
         type="text"
          value={note.title}
          placeholder='Title'/>
        <textarea
         name='content'
         onChange={handleChange}
         type="text"
         value={note.content} 
         placeholder='Take a Note...' 
         rows='3'/>
        <button onClick={submitNote}><AddIcon/></button>
    </div>
  )
}

export default NoteAdd