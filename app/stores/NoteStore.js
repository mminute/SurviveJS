import uuid from 'node-uuid';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';

class NoteStore {
    constructor() {
        this.bindActions(NoteActions);

        this.notes =
            [
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
            ];
    }

    create(note) {
        note.id = uuid.v4();

        const notes = [...this.notes, note];

        this.setState({notes})
    }

    update(updatedNote) {
        const notes = this.notes.map(note => {
            if (note.id === updatedNote.id) {
                // Object.assign is used to patch the note data here.
                // It mutates the target (first parameter).
                // In order to avoid this we use an empty object as the target
                // and apply data to it.  You can pass as many args as desired
                return Object.assign({}, note, updatedNote);
            }
            return note;
        });

        this.setState({notes});
    }

    delete(id) {
        this.setState({
            notes: this.notes.filter(note => note.id !== id)
        });
    }
}

export default alt.createStore(NoteStore, 'NoteStore');