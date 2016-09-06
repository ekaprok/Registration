import React, { Component } from 'react';

class SignUpComplete extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="titleOne">Complete your account</h1>
        <h3 className="titleTwo"> Tell us your email and set a password</h3>
            <input
              className="input-register"
              type="text"
              value={this.props.firstName}
              placeholder='First Name'
              onChange={this.onChangeFirstName}
            />
            <input
              className="input-register"
              type="text"
              value={this.props.lastName}
              placeholder='Last Name'
              onChange={this.onChangeLastName}
            />
            <button className="next-button" onClick={this.props.prevStep}>&#x3c; Back</button>
            <input
              className="sign-button"
              type="submit"
              value="Sign Up"
              onChange={this.signup}
            />

            <p className="message"> Do You Have an Account? <button onClick={this.props.goto_login} className="goto-button">Login</button></p>
      </div>
    )
  }
}
