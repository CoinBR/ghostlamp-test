import React from "react";
import { FirebaseApp } from '../../services/Firebase/Firebase';


export default class Register extends React.Component {
  
  handleRegister = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await FirebaseApp
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleRegister}>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}