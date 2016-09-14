import React, {Component} from 'react';
import uuid from 'node-uuid';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes : [
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
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.notes.map(note =>
                            <li key={note.id}>
                                {note.task}
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}
