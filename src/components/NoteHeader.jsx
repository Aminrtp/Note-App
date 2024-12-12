import React, { useState } from 'react'

function NoteHeader({ notes , sortby , onSort}) {
    
    return (
        <div className="note-header">
            <h1>My Notes ({notes.length})</h1>

            <select value={sortby} onChange={onSort}>
                <option value="latest">Sort based on latest notes</option>
                <option value="earliest">Sort based on earliest notes</option>
                <option value="completed">Sort based on completed notes</option>
            </select>
        </div>
    )
}

export default NoteHeader