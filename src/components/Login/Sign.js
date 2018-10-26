import React from "react";
import { Link, Redirect } from 'react-router-dom';
import { FirebaseApp } from '../../services/Firebase/Firebase';
import { User } from '../../services/Firebase/Firebase';

import { PATHS } from '../App/routes';
import Form from './Form'

class Sign extends React.Component {
  
  proccessForm = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      if (this.props.operation === "Login"){
        await FirebaseApp.auth().signInWithEmailAndPassword(email.value, password.value);
      }
      else {
        await FirebaseApp.auth().createUserWithEmailAndPassword(email.value, password.value);
      }
      this.props.history.push(PATHS.myTVShows);
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <Form operation={this.props.operation} proccessForm={this.proccessForm} />
    );
  }
}


export default Sign;