import React, { useEffect, useState } from "react";

import NoteList from "./components/NoteList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid'
import Search from "./components/Search";
import Header from "./components/Header";





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




  ]);

  const [searchText, setSearchText] = useState('');

  const [isdarkmode, setIsdarkmode] = useState(false)





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






  const deleteNote = (id) => {

    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote)

  }




  useEffect(() => {


    const savedNotes = JSON.parse(localStorage.getItem('notes'));

    if (savedNotes) {
      setNotes(savedNotes)
    }



  }, [])










  useEffect(() => {

    localStorage.setItem('notes', JSON.stringify(notes))



  }, [notes])






  return (
    <>
      <ToastContainer />
      <div className={`${isdarkmode && 'dark-mode'}`}>

        <div className="container">
          <Header handleDarkMode={setIsdarkmode} />
          <Search handleSearch={setSearchText} />
          <NoteList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} deleteNote={deleteNote} />
        </div>

      </div>

    </>
  );
}

export default App;
