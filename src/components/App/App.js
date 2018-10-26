import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FirebaseService from "../../services/FirebaseService"

import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

import LeftMenu from './AppLeftMenu';
import TVShowList from '../TVShow/TVShowList';
import TVShowAdd from '../TVShow/TVShowAdd';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};


class App extends Component {

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar position="static">
            <Toolbar>
              <Router>
                  <LeftMenu />
              </Router>
              <Typography type="title" color="inherit">
                  I ❤ TV
              </Typography>
            </Toolbar>
        </AppBar>
       
        <TVShowList />
        <TVShowAdd />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);