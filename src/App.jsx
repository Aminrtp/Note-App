import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
function App() {
  const [notes, setNotes] = useState([]);

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
console.log(notes);


return (
  <div className="container">
    <div className="note-header">note header</div>
    <div className="note-app">
      <AddNewNote handleAdd={handleAdd} />
      <div className="note-container">
        <NoteList
          notes={notes}
          handleComplete={handleComplete}
          handleDelete={handleDelete} />
      </div>
    </div>
  </div>
)
}

export default App
