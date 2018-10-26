import React from "react";
import { Link } from 'react-router-dom';
import { FirebaseApp } from '../../services/Firebase/Firebase';
import { User } from '../../services/Firebase/Firebase'

import { Button, TextField} from "@material-ui/core";
import { Typography, Card, CardContent, CardActions, CardActionArea } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

import { PATHS } from '../App/routes';

class Register extends React.Component {
  
  handleRegister = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await FirebaseApp
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push(PATHS.myTVShows);
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleRegister} className={classes.center}>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Login
            </Typography>
            <Typography component="p">
                <TextField name="email" type="email" label="E-Mail" 
                    placeholder="myaddress@gmail.com" autofocus/>
                <TextField name="password" type="password" label="Password" 
                    placeholder="*******" autofocus/>
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button type="submit" variant="contained" color="primary">Login</Button>
          </CardActions>
          <CardActions className={classes.center}>
            <Link to={PATHS.register}>
              <Typography component="p"> Don't have an account yet?</Typography>
            </Link>
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

export default withStyles (styles)(Register);