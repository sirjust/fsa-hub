import React from 'react';
import {
  fullStackApprenticeship,
  cityByCity,
  findingWork
  } from '../directories';

export default class NewResourceForm extends React.Component {
  constructor() {
    super();

    this.state = {
      directory: 'FSA',
      schemas: []
    };
  }

  componentDidMount() {
    this.updateSchemas()
  }

  changeDirectory = async e => {
    await this.setState({
      directory: e.target.value
    })
    await this.updateSchemas();
  }

  updateSchemas() {
    switch (this.state.directory) {
      case 'FSA':
        this.setState({ schemas: fullStackApprenticeship})
        break;
      case 'City Guide':
        this.setState({ schemas: cityByCity})
        break;
      case 'Getting Paid':
        this.setState({ schemas: findingWork})
        break;
      default:
        break;
    }
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
              id="resourceName"
              required
          />
        </div>
        <br />

        <div className="formElement">
          <label>Directory</label>
          <br />
          <select onChange={this.changeDirectory} required>
            <option value='fsa'>FSA</option>
            <option value='cityGuide'>City Guide</option>
            <option value='gettingPaid'>Getting Paid</option>
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
              id="resourceDescription"
              required
          />
        </div>
        <br />
        
        <div className="formElement">
          <label>URL</label>
          <br />
          <input
              type="url"
              id="resourceUrl"
              required
          />
        </div>
        <br />

        {/* Maybe this is automatic depending on who submitted resource? */}
        <div className="formElement">
          <label>Resource Author</label>
          <br />
          <input
              type="text"
              id="resourceAuthor"
          />
        </div>
        <br />

        <div className="formElement">
          <label>Rank</label>
          <br />
          <input
              type="number"
              id="resourceRank"
              min="1"
              max="100"
              required
          />
          <p className='small'>
            Give the content a rank between 1 and 100
          </p>
        </div>
        <br />

        <input type='submit' value='Request' />

      </form>
    )
  }}