import React, { Component, Fragment } from 'react'
import { Menu, Icon, Modal, Form, Button, Input } from 'semantic-ui-react'

class Channels extends Component {
  state = {
    channels: [],
    modal: false,
    channelName: '',
    channelDetails: ''
  }

  closeModal = () => this.setState({ modal: false })

  openModal = () => this.setState({ modal: true })

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

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
            <Form>
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
            <Button color='green' inverted>
              <Icon name='checkmark' /> Add
            </Button>
            <Button color='red' inverted  onClick={this.closeModal} >
              <Icon name='remove' /> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </Fragment>
    )
  }
}

export default Channels
