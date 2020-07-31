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
    passwordConfirmation: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(createdUser => console.log(createdUser))
      .catch(err => console.log(err))
  }

  render() {
    const { username, email, password, passwordConfirmation } = this.state

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
          <Message>
            Already a user? <Link to='/login'>Login</Link>
          </Message>
        </GridColumn>
      </Grid>
    )
  }
}

export default Register
