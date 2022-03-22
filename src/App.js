import React, { useState } from "react";

import NoteList from "./components/NoteList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid'





function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '15/04/2022'
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '17/04/2022'
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '05/04/2022'
    },
    {
      id: nanoid(),
      text: 'This is my fourth note!',
      date: '25/04/2022'
    }




  ])





  const addNote = (text) => {

    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes)



  }




  return (
    <>
      <ToastContainer />
      <div className="container">
        <NoteList notes={notes} handleAddNote={addNote} />
      </div>
    </>
  );
}

export default App;
