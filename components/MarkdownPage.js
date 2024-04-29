import React from 'react';
import './MarkdownPage.css';

async function getTextFromFile(file) {
  let response = await fetch(file);
  if (response.status !== 200) throw response;

  let text = await response.text()
  return text;
}

async function fetchMarkdownPage(text) {
  let response = await fetch('https://api.github.com/markdown', {
    method: 'POST',
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    },
    body: JSON.stringify({text: text})
  })
  if (response.status !== 200) throw response;

  let markdown = await response.text();
  return markdown;
}

class MarkdownPage extends React.Component {
  constructor(props) {
    super(props);
    this.page = React.createRef();
  }

  async componentDidMount() {
    if (this.props.file) {
      let text = await getTextFromFile(this.props.file);
      let md = await fetchMarkdownPage(text);
      this.page.current.innerHTML = md;
    }
  }

  render() {
    return <div ref={this.page} {...this.props}></div>;
  }
}

export default MarkdownPage;
