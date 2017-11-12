import React, { Component } from 'react';

class MarkdownField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ""
    };
  }

  onInputChange(inputText) {
    this.setState({inputText});
    this.props.onUserInput(inputText);
  }

  render () {
    return (
      <div className="markdown-field col-md-6">
        <textarea
          cols="60"
          rows="20"
          value={this.state.inputText}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

}

export default MarkdownField;
