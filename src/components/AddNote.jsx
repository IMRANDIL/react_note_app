import React, { useState } from 'react'
import { toast } from 'react-toastify'








const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState('')



    const handleChange = (e) => {
        setNoteText(e.target.value)
    }


    const handlesave = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('')
        } else {
            toast.error(`Please Type Some Note!`)
        }


    }



    return (
        <div className='note new'>
            <textarea cols="10" rows="8" placeholder='Type to add a note...' value={noteText} onChange={handleChange} />
            <div className="note-footer">
                <small>200 Remaining</small>
                <button className='save' onClick={handlesave}>Save</button>
            </div>
        </div>
    )
}

export default AddNote