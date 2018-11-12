import React, { Component } from 'react';


import sanity from '../lib/sanity'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

const query = `*[_type == 'algorithmsSchema' || _type == 'gitSchema'][0]
`

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

export default class LinkComponent extends Component {
    constructor() {
        super()
        this.state = {
            movie: {}
        }
    }

    static async getInitialProps(req) {
        return {
            movie: await sanity.fetch(query, { id: req.query.id })
        }
    }

    async componentDidMount() {
        const queryId = window.location.href.split('/');
        const test = await sanity.fetch(query);
        console.log('test',test)
        await fetch(`https://zp7mbokg.api.sanity.io/v1/data/query/production?query=*[_id == '${queryId[queryId.length - 1]}']`)
            .then(info => info.json())
            .then(info => this.setState({ movie: info.result[0] }, ()=>console.log(this.state)))

    }

    render() {
        return (
            <TabContainer>
                <Paper className={styles.root} elevation={1}>
                    <Typography variant="h5" component="h2">
                        This will dispay the information for each link
                    </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
                    </Typography>
                </Paper>
            </TabContainer>

        );
    }
}