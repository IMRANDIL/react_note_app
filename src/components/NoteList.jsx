import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NoteList = ({ notes, handleAddNote, deleteNote }) => {
    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note key={note.id} id={note.id} text={note.text} date={note.date} deleteNote={deleteNote} />

            ))}

            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NoteList