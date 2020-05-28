// This file is my designing of the Login form of the Modal.

import React, { Component } from 'react'
import Modal from 'react-modal'
import { Button } from 'react-bootstrap'
class LoginComponent extends Component<any, any> {
  render() {
    return (
      <div>
        <Modal className="modal_starting_Login" isOpen={true}>
          <div className="modal_body_Login">
            <h2>Login</h2>
            <form onSubmit={this.props.handleSubmit}>
              <div className="fields_Login">
                <input
                  name="email"
                  placeholder="email"
                  onChange={this.props.handleChange}
                  style={{ fontSize: '22px' }}
                />
                <div style={{ fontSize: 12, color: 'red' }}>
                  {this.props.emailError}
                </div>
              </div>
              <div className="fields_Login">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={this.props.handleChange}
                  style={{ fontSize: '22px' }}
                />
                <div style={{ fontSize: 12, color: 'red' }}>
                  {this.props.passwordError}
                </div>
              </div>
              <Button
                type="submit"
                className="inside_login_button_Login btn btn-md btn-primary btn-center"
              >
                Login
              </Button>
              <Button
                className="inside_login_button_Login"
                onClick={this.props.close}
              >
                Close
              </Button>
            </form>
          </div>
        </Modal>
      </div>
    )
  }
}
export default LoginComponent
