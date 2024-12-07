import { useState } from "react"


function AddNewNote({ setNotes }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            title,
            description,
            id: Date.now(),
            completed: false,
            createdAt: new Date().toISOString()
        };
        setNotes((prev) => [...prev,newNote])
    }


    return (
        <div className="add-new-note">
            <h2>Add New Note</h2>
            <form onSubmit={handleSubmit} className="note-form">
                <input
                    type="text"
                    className="text-field"
                    placeholder="Note title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    className="text-field"
                    placeholder="Note description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button
                    type="submit"
                    className='btn btn--primary'>Add New Note</button>
            </form>

        </div>
    )
}

export default AddNewNote