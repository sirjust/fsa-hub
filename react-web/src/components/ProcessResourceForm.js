import React from 'react';
import {
  fullStackApprenticeship,
  cityByCity,
  findingWork
  } from '../directories';
import Button from '@material-ui/core/Button';

export default class NewResourceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      directory: this.props.formInfo.directory,
      schemas: [],
      schema: this.props.formInfo.schema
    };
  }

  async componentDidMount() {
    await this.updateSchemas();
  }

  updateSchemas() {
    this.setState({ schema: '' })
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

  changeDirectory = async e => {
    await this.setState({
      directory: e.target.value
    })
    await this.updateSchemas();
  }

  render() {
    let { formInfo } = this.props
    let schemas = this.state.schemas.map((item, i) => 
      <option key={i} value={item.name}>{item.name}</option>)
    return (
      <form className='newResourceForm'>
        <div className="formElement">
          <label>Resource Name</label>
          <br />
          <input
              type="text"
              id="resourceName"
              value={formInfo.name}
              required
          />
        </div>
        <br />

        <div className="formElement">
          <label>Directory</label>
          <br />
          <select value={this.state.directory || formInfo.directory} onChange={(e) => this.changeDirectory(e)} required>
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
          <select onChange={this.updateSchemas} required>
            {this.state.schema ? <option>{this.state.schema}</option> : schemas }
          </select>
        </div>
        <br />
        
        <div className="formElement">
          <label>Description</label>
          <br />
          <input
              type="text"
              id="resourceDescription"
              value={formInfo.description}
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
              value={formInfo.url}
              required
          />
          <br />
          <a href={formInfo.url} target='_blank'>Visit Url</a>
        </div>
        <br />

        <div className="formElement">
          <label>Resource Author</label>
          <br />
          <input
              type="text"
              id="resourceAuthor"
              value={formInfo.author}
              required
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
              placeholder={formInfo.rank}
              required
          />
          <p className='small'>
            Give the content a rank between 1 and 100
          </p>
        </div>
        <br />

        {/* Button need to either approve request and add to schemas 
        in proper directory, or delete request */}
        <Button>
          Approve Resource
        </Button>
        <Button>
          Deny Resource
        </Button>

      </form>
    )
  }}