import React, { Component } from 'react';
import './styles.css';
import SignIn from './containers/SignIn/SignIn';
import SignUpBasic from './containers/SignUp/SignUpBasic';
import SignUpComplete from './containers/SignUp/SignUpComplete';

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  nextStep() {
    this.setState({
      page : this.state.page + 1
    });
  }

  prevStep() {
    this.setState({
      page : this.state.page - 1
    });
  }

  goto_login() {
    this.setState({
      page : 1
    });
  }

  showPage() {
      switch (this.state.page) {
        case 1:
          return <SignIn nextStep={this.nextStep.bind(this)} />
        case 2:
          return <SignUpBasic nextStep={this.nextStep.bind(this)}
                  goto_login={this.goto_login.bind(this)}  />
        case 3:
          return <SignUpComplete
                  goto_login={this.goto_login.bind(this)}
                  prevStep={this.prevStep.bind(this)}/>
      }
  }

  render() {
    return (
        this.showPage()
    );
  }

  onChangePassword(text) {
    this.setState({password: text});
  }
}

export default AuthContainer;
