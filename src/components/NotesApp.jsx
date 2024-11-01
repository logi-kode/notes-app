import React from "react";
import { getInitialData } from "../utils/index";
import NotesList from "./NotesList";
import NoteInput from "./NotesInput";

class NotesApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getInitialData()
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({ notes })
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toLocaleDateString(),
                        achieved: false
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div className="note-app">
                <h1>📝 Notes App</h1>
                <NoteInput addNote={this.onAddNoteHandler}/>
                <h2>Catatan Saya</h2>
                <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
            </div>
        )
    }
}

export default NotesApp