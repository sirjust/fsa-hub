import React from 'react';
import { Link } from 'react-router-dom';
import ProcessResourceForm from '../components/ProcessResourceForm';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import sanity from '../lib/sanity'
import { API } from 'aws-amplify';

const styles = {
  card: {
    minWidth: 100,
    margin: 10,
    flex: '1 0 100'
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  icons: {
    color: '#3700B3',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 20px 5px 20px'
  },
  button: {
    display: 'flex',
    alignItems: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
  },
  review: {
    display: 'flex',
    flexDirection: 'column'
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

class ProcessResource extends React.Component {
  constructor() {
    super();
    this.state = {
      links: [],
      processing: false,
      processingForm: null,
    }

  }

  async componentDidMount() {
    // just using fake list for testing purposes

    const response = await API.get('resources', `/resources/cityGuide`)
    console.log(response);
    
    this.setState({
      links: response
    })
  }

  handleProcessResource(item, index) {
    this.setState({ 
      processing: true,
      processingForm: item
    });
  }

  render() {
    let toProcess = this.state.links.map((item, index) => {
      return (
        <Grid key={index} item xs={6} sm={3}>
          <Card style={styles.card} onClick={() => this.handleProcessResource(item, index)}>
            <CardContent>
                <Typography style={styles.title}>
                  {item.resourceName}
                </Typography>
            </CardContent>
            <CardContent>
              <Typography>
                {item.description}
              </Typography>
            </CardContent>
            <CardActions style={styles.button}>

            {/* not sure about what url will be, needs to take you to page of new resource */}
              {/* <Button component={Link} to={`/resource/new/${item.directory}${item.schema}`}> */}
              <Button>
                View/Edit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      
      )
    })
    return !this.state.processing ?
      <div className='App-intro' style={styles.review}>
        <h1 style={{ textAlign: 'center' }}>Resource Approval</h1>
        <div style={styles.list}>
          {toProcess}
        </div>
      </div>
    : 
      <div className='App-intro' style={styles.form}>
        <h1>Processing Resource</h1>
        <p>
          Check over the resource for spelling / punctuation <br />
          errors and give it your approval or the boot
        </p>
        <ProcessResourceForm formInfo={this.state.processingForm} />
      </div>     
  }
}

export default ProcessResource;

const fakeListOfNewResources = [
  {
    name: 'Valhalla Coffee Co.2',
    directory: 'City Guide',
    schema: 'Tacoma',
    description: 'nice place for meetups',
    url: 'https://www.google.com/search?tbm=lcl&ei=gOg0XNPiDtW-0PEPwJGhoAM&q=valhalla+coffee+co.2&oq=valhalla+coffee+co.2&gs_l=psy-ab.3..38.14530.15580.0.16493.5.5.0.0.0.0.853.1232.0j3j6-1.4.0....0...1c.1.64.psy-ab..1.4.1230...0j0i67k1j0i22i30k1.0.CbYdY3fkWpw#rlfi=hd:;si:2414417899135471933;mv:!1m2!1d47.255117899999995!2d-122.438844!2m2!1d47.2420786!2d-122.4901013',
    author: 'Vincent',
    rank: 80,
    status: false,
  },

  {
    name: 'Valhalla Coffee Co.2',
    directory: 'City Guide',
    schema: 'Tacoma',
    description: 'nice place for meetups',
    url: 'https://www.google.com/search?tbm=lcl&ei=gOg0XNPiDtW-0PEPwJGhoAM&q=valhalla+coffee+co.2&oq=valhalla+coffee+co.2&gs_l=psy-ab.3..38.14530.15580.0.16493.5.5.0.0.0.0.853.1232.0j3j6-1.4.0....0...1c.1.64.psy-ab..1.4.1230...0j0i67k1j0i22i30k1.0.CbYdY3fkWpw#rlfi=hd:;si:2414417899135471933;mv:!1m2!1d47.255117899999995!2d-122.438844!2m2!1d47.2420786!2d-122.4901013',
    author: 'Vincent',
    rank: 80,
    status: false,
  },

  {
    name: 'Valhalla Coffee Co.2',
    directory: 'City Guide',
    schema: 'Tacoma',
    description: 'nice place for meetups',
    url: 'https://www.google.com/search?tbm=lcl&ei=gOg0XNPiDtW-0PEPwJGhoAM&q=valhalla+coffee+co.2&oq=valhalla+coffee+co.2&gs_l=psy-ab.3..38.14530.15580.0.16493.5.5.0.0.0.0.853.1232.0j3j6-1.4.0....0...1c.1.64.psy-ab..1.4.1230...0j0i67k1j0i22i30k1.0.CbYdY3fkWpw#rlfi=hd:;si:2414417899135471933;mv:!1m2!1d47.255117899999995!2d-122.438844!2m2!1d47.2420786!2d-122.4901013',
    author: 'Vincent',
    rank: 80,
    status: false,
  },

  {
    name: 'Valhalla Coffee Co.2',
    directory: 'City Guide',
    schema: 'Tacoma',
    description: 'nice place for meetups',
    url: 'https://www.google.com/search?tbm=lcl&ei=gOg0XNPiDtW-0PEPwJGhoAM&q=valhalla+coffee+co.2&oq=valhalla+coffee+co.2&gs_l=psy-ab.3..38.14530.15580.0.16493.5.5.0.0.0.0.853.1232.0j3j6-1.4.0....0...1c.1.64.psy-ab..1.4.1230...0j0i67k1j0i22i30k1.0.CbYdY3fkWpw#rlfi=hd:;si:2414417899135471933;mv:!1m2!1d47.255117899999995!2d-122.438844!2m2!1d47.2420786!2d-122.4901013',
    author: 'Vincent',
    rank: 80,
    status: false,
  },

  {
    name: 'Valhalla Coffee Co.2',
    directory: 'FSA',
    schema: 'Getting Started',
    description: 'nice place for meetups',
    url: 'https://www.google.com/search?tbm=lcl&ei=gOg0XNPiDtW-0PEPwJGhoAM&q=valhalla+coffee+co.2&oq=valhalla+coffee+co.2&gs_l=psy-ab.3..38.14530.15580.0.16493.5.5.0.0.0.0.853.1232.0j3j6-1.4.0....0...1c.1.64.psy-ab..1.4.1230...0j0i67k1j0i22i30k1.0.CbYdY3fkWpw#rlfi=hd:;si:2414417899135471933;mv:!1m2!1d47.255117899999995!2d-122.438844!2m2!1d47.2420786!2d-122.4901013',
    author: 'Vincent',
    rank: 80,
    status: false,
  }
]