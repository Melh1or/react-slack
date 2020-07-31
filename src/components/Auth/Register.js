import React, { Component } from 'react'
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
  GridColumn,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Register extends Component {
  handleChange = (e) => {}

  render() {
    return (
      <Grid textAlign='center' verticalAlign='middle' className="app">
        <GridColumn style={{ maxWidth: 450 }}>
          <Header as='h2' icon color='orange' textAlign='center'>
            <Icon name='puzzle piece' color='orange' />
            Register for DevChat
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                name='user'
                icon='user'
                type='text'
                iconPosition='left'
                placeholder='Username'
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                name='email'
                icon='mail'
                type='email'
                iconPosition='left'
                placeholder='Email'
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                name='password'
                icon='lock'
                type='password'
                iconPosition='left'
                placeholder='Password'
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                name='passwordConfirmation'
                icon='repeat'
                type='password'
                iconPosition='left'
                placeholder='Password Confirmation'
                onChange={this.handleChange}
              />

              <Button color='orange' fluid size='large'>Submit</Button>
            </Segment>
          </Form>
          <Message>Already a user? <Link to='/login'>Login</Link></Message> 
        </GridColumn>
      </Grid>
    )
  }
}

export default Register
