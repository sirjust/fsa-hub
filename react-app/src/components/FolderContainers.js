import React, { Component } from 'react';
import DirectoryCard from "../components/DirectoryCard"

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function TabContainer(props) {

    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

export default class FolderContainers extends Component {
    constructor() {
        super()
        this.state = {
            folders: []
        }
    }
    async componentDidMount() {
        const data = await fetch("https://zp7mbokg.api.sanity.io/v1/data/query/production?query=*[_type == 'movie']{ _id, title, releaseYear }")
        data.json().then(info => this.setState({ folders: info.result }))
    }
    render() {
        return (
            <TabContainer>
                <Grid container spacing={24}>
                    <DirectoryCard folders={this.state.folders} />
                </Grid>
            </TabContainer>
        );
    }
}
