import React from "react";
import { FirebaseApp } from '../../services/Firebase/Firebase';

import { PATHS } from '../App/routes';

export default class Logout extends React.Component {
  
  redirect = () => this.props.history.push(PATHS.login);

  componentWillMount = () => {
   FirebaseApp.auth().signOut().then(this.redirect, (error) => alert(error)); 
  }

  render() {
    return (
        <h1>Logging out...</h1>
    );
  }
}