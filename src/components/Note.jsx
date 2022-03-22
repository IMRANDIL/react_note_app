import React from 'react';

import { MdDeleteForever } from 'react-icons/md'

const Note = () => {
    return (
        <div className='note'>
            <span>Hello ali this my first note!</span>
            <div className="note-footer">
                <small>14/05/2022</small>
                <MdDeleteForever />
            </div>
        </div>
    )
}

export default Note