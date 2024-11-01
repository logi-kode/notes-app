import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            maxLimitTextCharacter: 50
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onTitleChangeEventHandler(event) {
        const limitText = 50
        const titleInput = event.target.value.slice(0, limitText) 
        const titleInputLength = titleInput.length

        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
                maxLimitTextCharacter: limitText - titleInputLength
            }
        })
    }

    onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault()
        this.props.addNote(this.state)
        this.setState({
            title: '',
            body: ''
        })
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <p className="note-input__title__char-limit">Limit Karakter : {this.state.maxLimitTextCharacter}</p>
                <textarea type="text" placeholder="Isi catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default NoteInput