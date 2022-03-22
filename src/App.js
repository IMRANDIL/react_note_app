import React, { useState } from "react";

import NoteList from "./components/NoteList";

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




  return (
    <div className="container">
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
