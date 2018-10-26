import React from "react";
import { Link } from 'react-router-dom';
import { FirebaseApp } from '../../services/Firebase/Firebase';
import { User } from '../../services/Firebase/Firebase'

import { Button, TextField} from "@material-ui/core";
import { Typography, Card, CardContent, CardActions, CardActionArea } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

import { PATHS } from '../App/routes';

class Form extends React.Component {

  isInTheRightOperation = () => {
    let msg;
    let link;
    if (this.props.operation === "Register" ){
      msg = "Already have an Account?";
      link = PATHS.login;
    }
    else{
      msg = "Don't have an Account yet?";
      link = PATHS.register;
    }

    return (
      <Link to={link}>
        <Typography component="p">{msg}</Typography>
      </Link>); 
  }
             

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.props.proccessForm} className={classes.center}>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.operation}
            </Typography>
            <Typography component="p">
                <TextField name="email" type="email" label="E-Mail" 
                    placeholder="myaddress@gmail.com" autofocus/>
                <TextField name="password" type="password" label="Password" 
                    placeholder="*******" autofocus/>
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button type="submit" variant="contained" color="primary">
              {this.props.operation}
            </Button>
          </CardActions>
          <CardActions className={classes.center}>
            {this.isInTheRightOperation()}
          </CardActions>    
        </Card>
      </form>
      
    );
  }
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 250,
    margin: "7% 0% 0% 37%",
    background: "#EEEEEE",
    "text-align": "center",
  },

  actions: {    
    display: "block",
    "text-align": "right",
  },

  center: {
    display: "block",
    "text-align": "center",
  },

});

export default withStyles(styles)(Form);