import React, { Component, Fragment } from 'react'
import { Menu, Icon, Modal, Form, Button, Input } from 'semantic-ui-react'
import firebase from '../../firebase'

class Channels extends Component {
  state = {
    channels: [],
    modal: false,
    channelsRef: firebase.database().ref('channels'),
    channelName: '',
    channelDetails: '',
    user: this.props.currentUser
  }

  closeModal = () => this.setState({ modal: false })

  openModal = () => this.setState({ modal: true })

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  addChannel = () => {
    const { channelsRef, channelName, channelDetails, user } = this.state

    const key = channelsRef.push().key

    const newChannel = {
      id: key,
      name: channelName,
      details: channelDetails,
      createdBy: {
        name: user.displayName,
        avatar: user.photoURL
      }
    }

    channelsRef
      .child(key)
      .update(newChannel)
      .then(() => {
        this.setState({ channelName: '', channelDetails: '' })
        this.closeModal()
        console.log('add channel')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.isFormValid(this.state)) {
      console.log('channel added')

      this.addChannel()
    } else {
    }
  }

  isFormValid = ({ channelName, channelDetails }) =>
    channelName && channelDetails

  render() {
    const { channels, modal } = this.state
    return (
      <Fragment>
        <Menu.Menu style={{ paddingBottom: '2em' }}>
          <Menu.Item>
            <span>
              <Icon name='exchange' /> CHANNELS
            </span>{' '}
            ({channels.length}) <Icon name='add' onClick={this.openModal} />
          </Menu.Item>
          {/* Channels */}
        </Menu.Menu>
        {/* Add chanel modal */}
        <Modal basic open={modal} onClose={this.closeModal}>
          <Modal.Header>Add a Chanel</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Input
                  fluid
                  label='Name of Channel'
                  name='channelName'
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  label='About the channel'
                  name='channelDetails'
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' inverted onClick={this.handleSubmit}>
              <Icon name='checkmark' /> Add
            </Button>
            <Button color='red' inverted onClick={this.closeModal}>
              <Icon name='remove' /> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </Fragment>
    )
  }
}

export default Channels
