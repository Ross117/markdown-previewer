import React, { Component } from 'react';

class MarkdownField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "Type some Markdown and see it converted to HTML!"
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
          cols="45"
          rows="20"
          value={this.state.inputText}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

}

export default MarkdownField;
