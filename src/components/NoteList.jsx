function NoteList({ notes, handleDelete, handleComplete ,sortby }) {

    let sortedNotes = notes;
    if (sortby === "latest") {
        sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }

    if (sortby === "earliest") {
        sortedNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    }

    if (sortby === "completed") {
        sortedNotes = [...notes].sort(
            (a, b) => Number(b.completed) - Number(a.completed))
    }

    return (
        <div className="note-list">
            {sortedNotes.map((note) => (
                        <NoteItem
                            key={note.id}
                            note={note}
                            handleComplete={handleComplete}
                            handleDelete={handleDelete} />
                    ))
            }
        </div>
    );
}


function NoteItem({ note, handleDelete, handleComplete }) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    return (

        <div className={`note-item ${note.completed ? "completed" : ""}`}>
            <div className="note-item__header">
                <div>
                    <p className="title">{note.title}</p>
                    <p className="desc">{note.description}</p>
                </div>
                <div className="actions">
                    <button onClick={() => handleDelete(note.id)}>❌</button>
                    <input
                        type="checkbox"
                        name={note.id}
                        id={note.id}
                        checked={note.completed}
                        onChange={handleComplete}
                        value={note.id}
                    />
                </div>
            </div>
            <div className="note-item__footer">
                {new Date(note.createdAt).toLocaleDateString("en-US", options)}
            </div>
        </div>
    )
}







export default NoteList