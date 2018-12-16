import React, { Component } from 'react';
import "./MyEditor.css";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { Editor } from 'react-draft-wysiwyg';

const editorStyle = {
    border: '1px solid var(--color-3)',
    padding: '5px',
    borderRadius: '2px',
    height: '300px',
    width: '100%',
    marginBottom: '20px'
};

const toolbarStyle = {
    border: '1px solid var(--color-3)',
    marginTop: "20px"
};

export default class MyEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="my-editor">
                <Editor
                    placeholder="Type your text here ..."
                    editorState={this.props.editorState}
                    onEditorStateChange={this.props.onEditorStateChange}
                    editorStyle={editorStyle}
                    toolbarStyle={toolbarStyle}
                />
            </div>
        )
    }
}
