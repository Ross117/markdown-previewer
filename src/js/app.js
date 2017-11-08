import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MarkdownField from './components/markdown_field';
import HTMLPreview from './components/html_preview';
import Marked from 'marked';
import '../css/style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      convertedMarkdown: ""
    };
  }

  convertMarkdown(inputText) {
    const convertedMarkdown = Marked(inputText);

    this.setState({convertedMarkdown});
  }

  render() {
    const convertMarkdown = this.convertMarkdown.bind(this);

    return (
      <div className="row">
        <h1>Markdown Previewer</h1>
        <br />
        <MarkdownField onUserInput={convertMarkdown} />
        <HTMLPreview textDisplay={this.state.convertedMarkdown} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
