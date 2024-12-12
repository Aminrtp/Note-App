import React from 'react'
import Message from './Message';

function NoteStatus({ notes }) {
    const allNotes = notes.length;
    const completedNotes = notes.filter(n => n.completed === true).length;
    const unCompletedNotes = allNotes - completedNotes;

    if (!allNotes) return (
        <Message>
            💁‍♂️ No Notes has already been added.
        </Message>
    )
    return (

        <ul className='note-status'>
            <li>
                All <span>{allNotes}</span>
            </li>
            <li>
                Completed <span>{completedNotes}</span>
            </li>
            <li>
                Open <span>{unCompletedNotes}</span>
            </li>
        </ul>

    )
}

export default NoteStatus