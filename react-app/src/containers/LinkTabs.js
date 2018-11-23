import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FolderContainers from "../components/FolderContainers";
import { fullStackApprenticeship, cityByCity, findingWork } from '../directories'

function TabContainer(props) {

    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});


class LinkTabs extends Component {
    state = {
        value: 0,
        fsaFolders: [],
        cityFolders: [],
        workFolders: []
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    reduceFolder = (folder) => folder.reduce((acc, next) => acc.concat({ name: next.name, type: next.type }), []) 

render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={this.handleChange}>
                    <Tab label="Full-Stack Apprenticeship" />
                    <Tab label="City by City" />
                    <Tab label="Finding Work & Opportunity" />
                </Tabs>
            </AppBar>
            {value === 0 && <FolderContainers folders={this.reduceFolder(fullStackApprenticeship)}/>}
                {value === 1 && <FolderContainers folders={ this.reduceFolder(cityByCity) } />}
                {value === 2 && <FolderContainers folders={ this.reduceFolder(findingWork) } />}
            </div>
        );
    }
}

export default withStyles(styles)(LinkTabs);