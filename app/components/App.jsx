import React, {Component} from 'react';
import uuid from 'node-uuid';
import Notes from './Notes';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learn Webpack'
                },
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do Laundry'
                }
            ]
        };
    }

    addNote = () => {
        const notes = [...this.state.notes, {id: uuid.v4(), task: 'newTask'}];

        this.setState({notes});
    }

    handleDeleteNote = (id, e) => {
        // Avoid bubbling to edit
        if (e) {
            e.stopPropagation();
        }

        const notes = this.state.notes.filter(note => note.id !== id);

        this.setState({notes});
    }

    handleEditNote = (id, task) => {
        // Don't modify if trying to set an empty value
        if (!task.trim()) {
            return;
        }

        const notes = this.state.notes.map(note => {
            if (note.id === id && task) {
                note.task = task;
            }

            return note;
        });

        this.setState({notes});
    }

    render() {
        const { notes } = this.state;

        return (
            <div>
                <button className="addNote" onClick={this.addNote}>
                    +
                </button>
                <Notes
                    notes={notes}
                    onDeleteNote={this.handleDeleteNote}
                    onEditNote={this.handleEditNote}
                />
            </div>
        );
    }
}
