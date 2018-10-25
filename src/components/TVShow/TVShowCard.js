import React, {Component} from 'react';
import FirebaseService from "../../services/FirebaseService"

import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Card, CardContent, CardActions, Button, CardActionArea, CardMedia} from "@material-ui/core";
import { Star } from '@material-ui/icons';

const styles = {
  card: {
    maxWidth: 345,
    margin: 20,
  },
};

function FavoriteIcon(props){
  if (props.display){
    return <Star color="primary" />;
  }  
}

class TVShowCard extends Component {

  state = {
      test: ['loading...']
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.obj.name}
                </Typography>
                <Typography component="p">
                  {this.props.obj.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <FavoriteIcon display={this.props.obj.isFavorite} />
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

export default withStyles(styles)(TVShowCard);