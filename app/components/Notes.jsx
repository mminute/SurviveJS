import React from 'react';
import Note from './Note';

export default ({notes, onEditNote}) => {
    return (
        <ul>
            {notes.map(note =>
                <li key={note.id}>
                    <Note
                        task={note.task}
                        onEditNote={onEditNote.bind(null, note.id)}
                    />
                </li>
            )}
        </ul>
    );
};
