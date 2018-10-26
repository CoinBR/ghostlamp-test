import React, {Component} from 'react';
import FirebaseREST from '../../services/Firebase/FirebaseREST';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, CardActions, CardActionArea } from "@material-ui/core";
import { Star } from '@material-ui/icons';

import TVShowEdit from './TVShowEdit'
import TVShowDelete from './TVShowDelete'

const styles = {
  card: {
    Width: 300,
    margin: 20,
    float: "left",
  },

  finishedCard: {
    Width: 300,
    margin: 20,
    float: "left",
    opacity: 0.5,
  },
};


function FavoriteIcon(props){
   return (props.display) ? <Star color="primary" /> : "";
}

class TVShowCard extends Component {

  state = {
      test: ['loading...']
  };


  getCardClass = () => {
    const clsName = this.props.obj.isFinished ? 'finishedCard' : 'card';
    return this.props.classes[clsName];
  }  

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        
          <Card className={this.getCardClass()}>
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
              <TVShowDelete obj={this.props.obj} />              
              <TVShowEdit obj={this.props.obj} />
            </CardActions>
          </Card>                     
      </React.Fragment>
    );
  }
  componentDidMount() {
    FirebaseREST.get('tests', (fbData) => this.setState({test: fbData}));
  }
}

export default withStyles(styles)(TVShowCard);