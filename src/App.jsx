import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortby, setSortBy] = useState("latest");

  const handleAdd = (newNote) => {
    setNotes((prev) => [...prev, newNote])
  }

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }
  const handleComplete = (e) => {
    const id = Number(e.target.value);

    setNotes(prev =>
      prev.map(p =>
        p.id === id ? { ...p, completed: !p.completed } : p
      )
    );
  }
 

  return (
    <div className="container">
      <NoteHeader notes={notes}
        sortby={sortby}
        onSort={(e) => setSortBy(e.target.value)}
      />

      <div className="note-app">
        <AddNewNote handleAdd={handleAdd} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
          sortby={sortby}
            notes={notes}
            handleComplete={handleComplete}
            handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  )
}

export default App
