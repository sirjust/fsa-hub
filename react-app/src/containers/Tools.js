import React, { Component } from 'react';

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'proj_id', //idk where tf this is
  dataset: 'dataset', //yea same ^
  token: 'sanity-auth-token', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
})

export default class Tools extends Component {

  state = {
    tools: []
  }

  componentDidMount() {
    //query here
    const query = 'some sort of query';
    const params = 'maybe we have params, tho idk'
    client.fetch(query, params).then(tools => {
      this.setState({
        tools: [...tools]
      });
    });
  }

  render() {
    return (
      <div className='App-intro'>
        <h1>Developer Tools</h1>

        <ul>
          {this.renderTools()}
        </ul>
      </div>
    );
  }

  renderTools = () => {
    this.state.tools && this.state.tools.forEach(tool => (
      <li key={tool.name} onClick={this.handleClick} id={tool.id}>{tool.name}</li>
    ));
  }

  handleClick = event => {
    this.props.history.push(`/tools/${event.target.id}`);
  }
}