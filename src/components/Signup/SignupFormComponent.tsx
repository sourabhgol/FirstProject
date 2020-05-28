// This file is my designing of the Sign up form of the Modal.

import React, { Component } from 'react'
import Modal from 'react-modal'
import { Button } from 'react-bootstrap'
class SignupComponent extends Component<any, any> {
  render() {
    return (
      <div>
        <Modal className="modal_starting_Signup" isOpen={true}>
          <div className="modal_body_Signup">
            <h2>Sign Up</h2>
            <form onSubmit={this.props.handleSubmit}>
              <div className="fields_Signup">
                <input
                  name="name"
                  placeholder="name"
                  value={this.props.name}
                  onChange={this.props.handleChange}
                  style={{ fontSize: '22px' }}
                />
                <div style={{ fontSize: 10, color: 'red' }}>
                  {this.props.nameError}
                </div>
              </div>
              <div className="fields_Signup">
                <input
                  name="email"
                  placeholder="email"
                  value={this.props.email}
                  style={{ fontSize: '22px' }}
                  onChange={this.props.handleChange}
                />
                <div style={{ fontSize: 10, color: 'red' }}>
                  {this.props.emailError}
                </div>
              </div>
              <div className="fields_Signup">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  style={{ fontSize: '22px' }}
                  value={this.props.password}
                  onChange={this.props.handleChange}
                />
                <div style={{ fontSize: 10, color: 'red' }}>
                  {this.props.passwordError}
                </div>
              </div>
              <Button
                type="submit"
                className="inside_login_button_Signup btn btn-md btn-primary btn-center"
              >
                Signup
              </Button>
              <Button
                className="inside_login_button_Signup"
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
export default SignupComponent
