import React, {Component} from 'react';

export default class Note extends Component {
    constructor (props) {
        super(props);

        // Tracks editing state
        this.state = {
            editing: false
        };
    }

    renderEdit = () => {
        // We deal with blur and input handlers here.
        // These map to DOM events.
        // We also set selection to input end using a callback to a ref.
        // It gets triggered after the component mounts

        // We could also use a string reference (i.e., 'ref="input"')
        // and then refer to the element in question later in the code.
        // This would allow us to use the underlying DOM API through this.refs.input
        // This can be helpful when combined with React lifecycle hooks.
        return (
            <input
                type="text"
                ref={(e) => e ? e.selectionStart = this.props.task.length : null}
                autoFocus
                defaultValue={this.props.task}
                onBlur={this.finishEdit}
                onKeyPress={this.checkEnter}
            />
        );
    };

    renderNote = () => {
        // if the user clicks a normal note, trigger editing logic
        const { onDeleteNote } = this.props;

        return (
            <div onClick={this.edit}>
                <span className="task">{this.props.task}</span>
                {onDeleteNote ?
                    <button
                        className="deleteNote"
                        onClick={onDeleteNote}
                    >
                        X
                    </button>
                    : null
                }
            </div>
        );
    };

    edit = () => {
        // Enter edit mode
        this.setState({editing: true});
    };

    checkEnter = (e) => {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    };

    finishEdit = (e) => {
        // 'Note' will trigger an optional 'onEditNote' callback once it has a new value
        // We will use this to communicate the change to 'App'

        // A smarter way to deal with the default value would be to set it through
        // 'defautlProps'

        const value = e.target.value;

        if (this.props.onEditNote) {
            this.props.onEditNote(value);
        }
        // Exit editing mode
        this.setState({editing: false});
    };

    render() {
        if (this.state.editing) {
            return this.renderEdit()
        }

        return this.renderNote();
    }
}
