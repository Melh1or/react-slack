import React, { Component } from 'react'
import firebase from '../../firebase'
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
  GridColumn
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: []
  }

  isFormValid = () => {
    let errors = []
    let error

    if (this.isFormEmpty(this.state)) {
      error = { message: 'Fill in all fields' }
      this.setState({ errors: errors.concat(error) })
      return false
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: 'Password is invalid' }
      this.setState({ errors: errors.concat(error) })
      return false
    } else {
      // form valid
      return true
    }
  }

  isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    )
  }

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false
    } else if (password !== passwordConfirmation) {
      return false
    } else {
      return true
    }
  }

  displayErrors = (errors) =>
    errors.map((error, i) => <p key={i}>{error.message}</p>)

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    if (this.isFormValid()) {
      e.preventDefault()

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((createdUser) => console.log(createdUser))
        .catch((err) => console.log(err))
    }
  }

  render() {
    const {
      username,
      email,
      password,
      passwordConfirmation,
      errors
    } = this.state

    return (
      <Grid textAlign='center' verticalAlign='middle' className='app'>
        <GridColumn style={{ maxWidth: 450 }}>
          <Header as='h2' icon color='orange' textAlign='center'>
            <Icon name='puzzle piece' color='orange' />
            Register for DevChat
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                name='username'
                icon='user'
                type='text'
                value={username}
                iconPosition='left'
                placeholder='Username'
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                name='email'
                icon='mail'
                type='email'
                value={email}
                iconPosition='left'
                placeholder='Email'
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                name='password'
                icon='lock'
                type='password'
                value={password}
                iconPosition='left'
                placeholder='Password'
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                name='passwordConfirmation'
                icon='repeat'
                type='password'
                value={passwordConfirmation}
                iconPosition='left'
                placeholder='Password Confirmation'
                onChange={this.handleChange}
              />

              <Button color='orange' fluid size='large'>
                Submit
              </Button>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message>
            Already a user? <Link to='/login'>Login</Link>
          </Message>
        </GridColumn>
      </Grid>
    )
  }
}

export default Register
