import React from "react";
import NotesItemBody from "./NotesItemBody";
import NoteItemAction from "./NoteItemAction";

function NotesItem({ title, createdAt, body, id, onDelete }) {

    return (
        <div className="note-item">
            <NotesItemBody title={title} createdAt={createdAt} body={body}/>
            <NoteItemAction id={id} onDelete={onDelete}/>
        </div>
    )
}

export default NotesItem