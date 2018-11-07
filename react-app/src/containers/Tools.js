import React, { Component } from 'react';

export default class Tools extends Component {

  state = {
    tools: []
  }

  componentDidMount() {
    //query here
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
}