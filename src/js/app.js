import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MarkdownField from './components/markdown_field';
import HTMLPreview from './components/html_preview';
import Marked from 'marked';
import '../css/style.css';

const getExampleText = () => {
  // examples provided by Wikipedia (https://en.wikipedia.org/wiki/Markdown)
  const exampleText = `# Heading
## Sub-heading
### Another deeper heading

Paragraphs are separated
by a blank line.

Two spaces at the end of a line leave a  
line break.

Text attributes _italic_, *italic*,
__bold__, **bold**,` + '`monospace`.' + `

Horizontal rule:

---

Bullet list:
* apples
* oranges
* pears

Numbered list:
1. apples
2. oranges
3. pears

A [link](http://example.com).`;

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
