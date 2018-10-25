import React, {Component} from 'react';
import FirebaseService from "../../services/FirebaseService"

import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Card, CardContent, CardActions, Button, CardActionArea, CardMedia} from "@material-ui/core";

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
      <React.Fragment>
          <AppBar position="static">
              <Toolbar>
                  <Typography type="title" color="inherit">
                      I ❤ TV
                  </Typography>
              </Toolbar>
          </AppBar>
         
         <TVShowList />                   
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);