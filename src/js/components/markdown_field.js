import React, { Component } from 'react';

class MarkdownField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ""
    };
  }

  render () {
    return (
      <div className="markdown-field">
        <input
          value={this.state.inputText}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(inputText) {
    this.setState({inputText});
    this.props.onUserInput(inputText);
  }
}

export default MarkdownField;
