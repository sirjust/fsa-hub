import React from 'react';
import {
  fullStackApprenticeship,
  cityByCity,
  findingWork
  } from '../directories';
import { API } from 'aws-amplify';
import { Button } from '@material-ui/core';
import uuidv4 from "uuid";

export default class NewResourceForm extends React.Component {
  constructor() {
    super();

    this.state = {
      directory: 'fsa',
      schemas: [],
      author: '',
      name: '',
      url: '',
      schema: '',
      description: '',
      rank: ''
    };
  }

  componentDidMount() {
    this.updateSchemas();
    const { history } = this.props;
    console.log(history)
  }

  changeDirectory = async e => {
    await this.setState({
      directory: e.target.value
    })
    await this.updateSchemas();
  }

  updateSchemas() {
    switch (this.state.directory) {
      case 'fsa':
        this.setState({ schemas: fullStackApprenticeship})
        break;
      case 'cityGuide':
        this.setState({ schemas: cityByCity})
        break;
      case 'findingWork':
        this.setState({ schemas: findingWork})
        break;
      default:
        break;
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    
    const body = {
      resourceId: uuidv4(),
      directory: this.state.directory,
      resourceAuthor: this.state.author,
      resourceName: this.state.name,
      resourceUrl: this.state.url,
      schemaType: this.state.schema,
      timestamp: Date.now(),
      description: this.state.description,
      rank: this.state.rank,
      approved: undefined
    }

    try {
      const response = await API.post('resources', '/resources', {body})
      console.log('fsa-sls Response', response)
    } catch(e) {
      console.log('ERROR', e)
    }

    // this.setState({
    //   directory: '',
    //   resourceAuthor: '',
    //   resourceName: '',
    //   resourceUrl: '',
    //   schemaType: '',
    //   description: '',
    //   rank: ''
    // })

    // this.props.history.push('/');
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    let schemas = this.state.schemas.map((item, i) => 
      <option key={i}>{item.name}</option>)
    return (
      <form className='newResourceForm'>
        <div className="formElement">
          <label>Resource Name</label>
          <br />
          <input
              type="text"
              id="name"
              required
              onChange={(name) => this.setState({ name: name})}
          />
        </div>
        <br />

        <div className="formElement">
          <label>Directory</label>
          <br />
          <select onChange={this.changeDirectory} required>
            <option value='fsa'>FSA</option>
            <option value='cityGuide'>City Guide</option>
            <option value='findingWork'>Finding Work</option>
          </select>
          <br />

        </div>
        <br />

        <div className='formElement'>
          <label>Schema Type</label>
          <br />
          <select required>
            {schemas}
          </select>
        </div>
        <br />
        
        <div className="formElement">
          <label>Description</label>
          <br />
          <input
              type="text"
              id="description"
              required
              onChange={(description) => this.setState({ description })}
          />
        </div>
        <br />
        
        <div className="formElement">
          <label>URL</label>
          <br />
          <input
              type="url"
              id="url"
              required
              onChange={(url) => this.setState({ resourceUrl: url })}
          />
        </div>
        <br />

        {/* Maybe this is automatic depending on who submitted resource? */}
        <div className="formElement">
          <label>Resource Author</label>
          <br />
          <input
              type="text"
              id="author"
              onChange={(author) => this.setState({ author })}
          />
        </div>
        <br />

        <div className="formElement">
          <label>Rank</label>
          <br />
          <input
              type="number"
              id="rank"
              min="1"
              max="100"
              required
              onChange={(rank) => this.setState({ rank })}
          />
          <p className='small'>
            Give the content a rank between 1 and 100
          </p>
        </div>
        <br />

        <Button onClick={this.handleSubmit}>Request</Button>

      </form>
    )
  }}