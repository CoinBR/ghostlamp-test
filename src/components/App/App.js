import React, {Component} from 'react';
import FirebaseService from "../../services/FirebaseService"

import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Card, CardContent, CardActions, Button, CardActionArea, CardMedia} from "@material-ui/core";


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
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>                     
      </React.Fragment>
    );
  }
  componentDidMount() {
    FirebaseService.get('tests', (fbData) => this.setState({test: fbData}));
  }
}

export default withStyles(styles)(App);