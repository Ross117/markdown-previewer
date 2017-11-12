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
        <div className="heading">
          <h1>Markdown Previewer</h1>
          <p>Type some Markdown into the box below and see it converted to HTML on the opposite side!</p>
          <p>Want to learn more about Markdown? <a href="https://en.wikipedia.org/wiki/Markdown">Click here</a>.</p>
        </div>
        <MarkdownField onUserInput={convertMarkdown} />
        <HTMLPreview textDisplay={this.state.convertedMarkdown} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));

// link to explanation of what markdown is?
