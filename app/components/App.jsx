import React, {Component} from 'react';
import AltContainer from 'alt-container';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends Component {
    addNote = () => {
        NoteActions.create({task: 'newTask'});
    }

    handleDeleteNote = (id, e) => {
        // Avoid bubbling to edit
        if (e) {
          e.stopPropagation();
        }

        NoteActions.delete(id);
    }

    handleEditNote = (id, task) => {
        // Don't modify if trying to set an empty value
        if (!task.trim()) {
            return;
        }

        NoteActions.update({id, task})
    }

    render() {
        return (
            <div>
                <button className="addNote" onClick={this.addNote}>
                    +
                </button>
                <AltContainer
                    stores={[NoteStore]}
                    inject={
                        {notes: () => NoteStore.getState().notes}
                    }
                >
                    {/* Altcontainer passes the notes prop into it's children */}
                    <Notes
                        onDeleteNote={this.handleDeleteNote}
                        onEditNote={this.handleEditNote}
                    />
                </AltContainer>
            </div>
        );
    }
}
