import React, { Component } from 'react';
import DirectoryCard from "../components/DirectoryCard"

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchComponent from './SearchComponent';

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
            folders: [],
            filteredFolders: []
        }
    }
    async componentDidMount() {
        const data = await fetch("https://zp7mbokg.api.sanity.io/v1/data/query/production?query=*[_type == 'movie']{ _id, title, releaseYear }")
        data.json().then(info => this.setState({ folders: info.result }))
    }

    handleSearch =  event => {
        const searchedFolders = this.state.folders.filter(item => {
            const normalizedSearch = event.target.value.replace(/[^A-Za-z0-9]+/gi, '')
            const regex = new RegExp(normalizedSearch, 'i');
            return item.title.match(regex) || false
        });
        this.setState({
            filteredFolders: searchedFolders
        })
    };
    render() {
        const {filteredFolders}  = this.state;
        return (
            <TabContainer>
                <SearchComponent handleSearch={this.handleSearch} />
                <Grid container spacing={24}>
                    <DirectoryCard folders={ 
                        filteredFolders.length < 1 
                            ?this.state.folders
                            :this.state.filteredFolders
                } />
                </Grid>
            </TabContainer>
        );
    }
}
