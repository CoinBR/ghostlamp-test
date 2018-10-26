import React, {Component} from 'react';
import FirebaseService from "../../services/FirebaseService"
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';


import NavigationMenu from './NavigationMenu';
import { PATHS } from './routes';
import TVShowList from '../TVShow/TVShowList'

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
      <BrowserRouter>
        <div>
          <AppBar position="static">
              <Toolbar>
                <NavigationMenu />
                <Typography type="title" color="inherit">
                    I ❤ TV
                </Typography>
              </Toolbar>
          </AppBar>
          <Route exact path={PATHS.myTVShows} component={TVShowList} />
        </div> 
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);