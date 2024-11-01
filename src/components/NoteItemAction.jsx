import React from "react";
import DeleteNote from "./DeleteNote";

function NoteItemAction({id, onDelete}){
    return (
        <div className="note-item__action">
            <DeleteNote id={id} onDelete={onDelete}/>
        </div>
    )
}

export default NoteItemAction