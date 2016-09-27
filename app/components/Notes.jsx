import React from 'react';
import Note from './Note';

export default ({notes, onEditNote, onDeleteNote}) => {
    return (
        <ul className="notes">
            {notes.map(note =>
                <li className="note" key={note.id}>
                    <Note
                        task={note.task}
                        onDeleteNote={onDeleteNote.bind(null, note.id)}
                        onEditNote={onEditNote.bind(null, note.id)}
                    />
                </li>
            )}
        </ul>
    );
};
