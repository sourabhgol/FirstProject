// It is the service where i am doing all my validation and authentication process for Signup form
// and also the local storage stuff like adding the user details ,removing , getting the values.

import React, { Component } from 'react'
import { history } from '../../Myhistory'
import SignupComponent from './SignupFormComponent'
export default class Signup extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      sign: true,
    }
  }
  handleChange = (event: any) => {
    var placeholders = event.target.placeholder
    if (placeholders === 'name') {
      this.setState({ name: event.target.value }, () => {
        var b = this.state.name
        this.setState({ name: b })
        this.validate(placeholders)
      })
    } else if (placeholders === 'email') {
      this.setState({ email: event.target.value }, () => {
        var b = this.state.email
        this.setState({ email: b })
        this.validate(placeholders)
      })
    } else {
      this.setState({ password: event.target.value }, () => {
        var b = this.state.password
        this.setState({ password: b })
        this.validate(placeholders)
      })
    }
  }
  validate = (event: any) => {
    if (event === 'name') {
      if (!this.state.name) {
        this.setState({ nameError: 'Name cannot be blank' })
      } else {
        this.setState({ nameError: '' })
      }
    } else if (event === 'email') {
      if (
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
      ) {
        this.setState({ emailError: 'Invalid Email' })
      } else {
        this.setState({ emailError: '' })
      }
    } else {
      if (this.state.password.length < 8 || this.state.password.length > 15) {
        this.setState({ passwordError: 'Length between 8-15' })
      } else {
        this.setState({ passwordError: '' })
      }
    }
  }
  validateAll = () => {
    let nameError = ''
    let passwordError = ''
    let emailError = ''
    if (!this.state.name) {
      nameError = 'Name cannot be blank'
    }
    if (
      !this.state.email ||
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      emailError = 'Invalid Email'
    }
    if (
      !this.state.password ||
      this.state.password.length < 8 ||
      this.state.password.length > 15
    ) {
      passwordError = 'Length between 8-15'
    }
    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError })
      return false
    }
    return true
  }

  handleSubmit = (event: any) => {
    event.preventDefault()
    const isValid = this.validateAll()
    if (isValid) {
      var formDetails = []
      formDetails.push(this.state.name)
      formDetails.push(this.state.email)
      formDetails.push(this.state.password)
      var email = localStorage.getItem(this.state.email)
      var name = localStorage.getItem(this.state.name)
      if (name === null && email === null) {
        localStorage.setItem(this.state.name, JSON.stringify(formDetails))
        localStorage.setItem(this.state.email, JSON.stringify(formDetails))
        this.props.updateParent()
        localStorage.setItem('token', this.state.email)
        history.push('/dashboard')
      } else if (name !== null) {
        this.setState({ nameError: 'Name alerady exists' })
      } else {
        this.setState({ emailError: 'Email already exists' })
      }
    }
  }

  onOpenModal = () => {
    this.setState({ sign: true })
  }

  onCloseModal = () => {
    this.setState({ sign: false })
  }
  close = () => {
    this.onCloseModal()
    this.props.updateParent()
    history.push('/')
  }
  render() {
    return (
      <SignupComponent
        handleChange={this.handleChange}
        validate={this.validate}
        validateAll={this.validateAll}
        close={this.close}
        onCloseModal={this.onCloseModal}
        onOpenModal={this.onOpenModal}
        handleSubmit={this.handleSubmit}
        name={this.state.name}
        email={this.state.email}
        password={this.state.password}
        nameError={this.state.nameError}
        emailError={this.state.emailError}
        passwordError={this.state.passwordError}
      />
    )
  }
}
