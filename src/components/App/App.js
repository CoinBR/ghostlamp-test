import React, {Component} from 'react';
import FirebaseService from "../../services/FirebaseService"

import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Card, CardContent, CardActions, Button, CardActionArea, CardMedia} from "@material-ui/core";

import TVShowEditor from '../TVShow/TVShowEditor'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};


class App extends Component {

  state = {
      test: ['loading...']
  };

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
         
         <TVShowEditor />                   
      </React.Fragment>
    );
  }
  componentDidMount() {
    FirebaseService.get('tests', (fbData) => this.setState({test: fbData}));
  }
}

export default withStyles(styles)(App);