// It is the service where i am doing all my validation and authentication process for Login form
// and also the local storage stuff like adding the user details ,removing , getting the values.

import React, { Component } from 'react'
import { history } from '../../Myhistory'
import LoginComponent from './LoginFormComponent'
export default class Login extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      login: true,
    }
  }
  handleChange = (event: any) => {
    if (event.target.placeholder === 'email') {
      this.setState({ email: event.target.value }, () => {
        var b = this.state.email
        this.setState({ email: b })
      })
    } else {
      this.setState({ password: event.target.value }, () => {
        var b = this.state.password
        this.setState({ password: b })
      })
    }
  }
  handleSubmit = (event: any) => {
    event.preventDefault()
    if (!this.state.email) {
      this.setState({ emailError: 'Email Required' })
      this.setState({ passwordError: '' })
    } else if (!this.state.password) {
      this.setState({ passwordError: 'Password Required' })
      this.setState({ emailError: '' })
    } else {
      var userDetails = localStorage.getItem(this.state.email)
      if (userDetails) {
        var parsed_user_Details = JSON.parse(userDetails)
        if (
          parsed_user_Details[1] === this.state.email &&
          parsed_user_Details[2] === this.state.password
        ) {
          localStorage.setItem('token', this.state.email)
          this.props.updateParent()
          history.push('/dashboard')
        } else if (parsed_user_Details[1] !== this.state.email) {
          this.setState({ emailError: 'Email not exists' })
          this.setState({ passwordError: '' })
        } else {
          this.setState({ passwordError: 'Wrong Password' })
          this.setState({ emailError: '' })
        }
      } else {
        this.setState({ emailError: 'Email not exists' })
        this.setState({ passwordError: '' })
      }
    }
  }
  onOpenModal = () => {
    this.setState({ login: true })
  }

  onCloseModal = () => {
    this.setState({ login: false })
  }
  close = () => {
    this.onCloseModal()
    this.props.updateParent()
    history.push('/')
  }
  render() {
    if (this.props.value) {
      return (
        <LoginComponent
          handleSubmit={this.handleSubmit}
          closeModal={this.onCloseModal}
          handleChange={this.handleChange}
          email={this.state.email}
          emailError={this.state.emailError}
          passwordError={this.state.passwordError}
          close={this.close}
        />
      )
    }
  }
}
