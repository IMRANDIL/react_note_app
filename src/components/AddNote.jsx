import React, { useState } from 'react'
import { toast } from 'react-toastify'








const AddNote = ({ handleAddNote }) => {

    const characterLimit = 200;

    const [noteText, setNoteText] = useState('')



    const handleChange = (e) => {
        if (characterLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value)
        }

    }


    const handlesave = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('')
        } else {
            toast.error(`Please Type A Note!`)
        }


    }



    return (
        <div className='note new'>
            <textarea cols="10" rows="8" placeholder='Type to add a note...' value={noteText} onChange={handleChange} />
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className='save' onClick={handlesave}>Save</button>
            </div>
        </div>
    )
}

export default AddNote