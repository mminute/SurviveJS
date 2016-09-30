import React, {Component} from 'react';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = NoteStore.getState();
    }

    componentDidMount() {
        NoteStore.listen(this.storeChanged);
    }

    componentWillUnmount() {
        NoteStore.unlisten(this.storeChanged);
    }

    storeChanged = (state) => {
        this.setState(state);
    }

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
