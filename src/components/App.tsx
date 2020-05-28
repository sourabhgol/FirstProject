// This is My home page from here i am displaying the home page to the user and when user clicks on
// either login or signup the user will be able to see the form in the form of Modal that is an
// overlay on the top of the page

import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Login from './Login/LoginAuthentication'
import { Redirect } from 'react-router'
import Signup from './Signup/SignupAuthentication'
class App extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      visibilitySignup: false,
      visibilityLogin: false,
    }
  }
  handleChangeSignup = () => {
    this.setState({ visibilitySignup: true })
  }
  handleChangeLogin = () => {
    this.setState({ visibilityLogin: true })
  }
  updateStateLogin = () => {
    this.setState({ visibilityLogin: false })
  }
  updateStateSignup = () => {
    this.setState({ visibilitySignup: false })
  }
  render() {
    if (localStorage.getItem('token')) {
      return <Redirect to="/dashboard" />
    } else {
      return (
        <div>
          <div className="AppHome">
            <img
              className="Applogo"
              src="data:image/png;base64,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"
              alt="Coding"
            />
            <Button
              className="AppButton btn btn-light"
              onClick={this.handleChangeLogin}
            >
              Login
            </Button>
            {this.state.visibilityLogin && (
              <Login
                value={this.state.visibilityLogin}
                updateParent={this.updateStateLogin}
              />
            )}
            <Button
              className="AppButton btn btn-dark"
              onClick={this.handleChangeSignup}
            >
              Signup
            </Button>
            {this.state.visibilitySignup && (
              <Signup
                value={this.state.visibilitySignup}
                updateParent={this.updateStateSignup}
              />
            )}
          </div>
        </div>
      )
    }
  }
}
export default App
