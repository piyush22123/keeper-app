import React, { useState } from 'react'
import Header from './Componenets/Header'
import NoteAdd from './Componenets/NoteAdd'
import Notes from './Componenets/Notes'
import Footer from './Componenets/Footer'
import NoteData from './Componenets/NoteData'
import './Componenets/Styles/Style.css'


const App = () => {

  const [notes, setNotes] = useState([]);
  
  // function to add note
  function addNote(newNote){
      setNotes(prevNotes => {
        return [...prevNotes, newNote]; // copy previous notes and add new note at the end.
      });
  }
  
  //function to delete note
  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
          return index !== id;
      })
    })
  }

  return (
    <div className="Appcontainer">
      <Header />
      <NoteAdd 
        onAdd = {addNote}
      />
      <div className="container">
        {/* // mapping notedata array into note componenet */}
        {notes.map(
          (noteItem, index) => {
            return(
            <Notes
              key= {index}
              id = {index}
              title={noteItem.title}
              detail={noteItem.content}
              onDelete = {deleteNote}
            />
            )
          })}
      </div>
      <Footer />
    </div>
  )
}

export default App