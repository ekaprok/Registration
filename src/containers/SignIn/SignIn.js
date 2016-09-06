import React, { Component } from 'react';

export default class SignIn extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="titleOne">Sign In with Email</h1>
        <h3 className="titleTwo"> Enter your email and a password</h3>
            <input
              className="input-register"
              type="email"
              placeholder='Email'
              value={this.props.currentEmail}
            />
            <input
              className="input-register"
              type="password"
              placeholder='Password'
              value={this.props.currentPassword}
            />
            <input
              className="sign-button"
              type="submit"
              value="Sign In"
              onChange={this.submit}
            />

            <p className="message"> Dont Have an Account?&nbsp;
              <button onClick={this.props.nextStep} className="goto-button">Register</button>
            </p>
      </div>
    )
  }


}
