import React from "react";
import { showFormattedDate } from "../utils";

function NotesItemBody({ title, body, createdAt}) {

    return (
        <div className="note-app__body">
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__archive-button" >Arsipkan</button>
            </div>
        </div>
    )
}


export default NotesItemBody