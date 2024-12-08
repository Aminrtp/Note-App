import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
function App() {
  const [notes, setNotes] = useState([]);
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id))

  }

  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote setNotes={setNotes} />
        <div className="note-container">
          <NoteList notes={notes} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  )
}

export default App
