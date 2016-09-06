import React, { Component } from 'react';

export default class SignUpBasic extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="titleOne">Create your account</h1>
        <h3 className="titleTwo"> Tell us your email and set a password</h3>
            <input
              className="input-register"
              type="email"
              value={this.props.email}
              placeholder='Email'
              onChange={this.onChangeEmail}
            />
            <input
              className="input-register"
              type="password"
              value={this.props.password}
              placeholder='Password'
              onChange={this.props.onChangePassword}
            />

            <button className="next-button" onClick={this.props.nextStep}>Next &#x3e;</button>
            <p className="message"> Do You Have an Account? <button onClick={this.props.goto_login} className="goto-button">Login</button></p>
      </div>
    )
  }
}
