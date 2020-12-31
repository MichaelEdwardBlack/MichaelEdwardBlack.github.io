import React from 'react'
import file from './AzureSecrets.md';
import MarkdownPage from '../../../components/MarkdownPage';

class AzureSecrets extends React.Component {
  render() {
    return (
        <MarkdownPage file={file} />
    );
  }
}

export default AzureSecrets;
