import React, { Component } from 'react';
import './App.css';

class SignIn extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="titleOne">Sign In with Email</h1>
        <h3 className="titleTwo"> Enter your email and a password</h3>
            <input
              className="input-register"
              type="email"
              value={this.state.value}
              placeholder='Email'
              onChange={this.handleChange}
            />
            <input
              className="input-register"
              type="password"
              value={this.state.value}
              placeholder='Password'
              onChange={this.handleChange}
            />
            <input
              className="sign-button"
              type="submit"
              value="Sign In"
              onChange={this.handleChange}
            />
            <button className="next-button">Next</button>
            <p className="message"> Dont Have an Account? <button className="goto-button">Register</button></p>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    }
  }

  render() {
    return (
        <SignIn />
    );
  }
}

export default App;
