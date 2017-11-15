import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MarkdownField from './components/markdown_field';
import HTMLPreview from './components/html_preview';
import Marked from 'marked';
import '../css/style.css';

const getExampleText = () => {
  // examples provided by Wikipedia
  const exampleText = '# Heading \n \n' +
    '## Sub-heading \n \n' +
    '### Another deeper heading \n \n' +
    'Paragraphs are separated \n' +
     'by a blank line. \n \n' +
    'Two spaces at the end of a line leave a  \n' +
    'line break. \n \n' +
    'Text attributes _italic_, *italic*, \n' +
    '__bold__, **bold**, `monospace`. \n \n' +
    'Horizontal rule: \n \n' +
    '--- \n \n' +
    'Bullet list: \n \n' +
    '* apples \n' +
    '* oranges \n' +
    '* pears \n \n' +
    'Numbered list: \n \n' +
    '1. apples \n' +
    '2. oranges \n' +
    '3. pears \n \n' +
    'A [link](http://example.com).';

    return exampleText;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      convertedMarkdown: Marked(getExampleText ())
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
          <p>Type some Markdown into the box below, and see it converted to HTML on the opposite side!</p>
          <p>Want to learn more about Markdown? <a href="https://en.wikipedia.org/wiki/Markdown">Click here for the Wikipedia article</a>. Example text provided by Wikipedia.</p>
        </div>
        <MarkdownField onUserInput={convertMarkdown} exampleText={getExampleText ()} />
        <HTMLPreview textDisplay={this.state.convertedMarkdown} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
