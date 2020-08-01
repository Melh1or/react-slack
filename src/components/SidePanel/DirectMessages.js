import React, { Component } from 'react'
import firebase from '../../firebase'
import { Menu, Icon } from 'semantic-ui-react'

class DirectMessages extends Component {
  state = {
    user: this.props.currentUser,
    users: [],
    usersRef: firebase.database().ref('users'),
    connectedRef: firebase.database().ref('.info/connected'),
    presenceRef: firebase.database().ref('presence')
  }

  componentDidMount() {
    if (this.state.user) {
      this.addListeners(this.state.user.uid)
    }
  }
  
  addListeners = currentUserUid => {
    let loadedUsers = []

    this.state.usersRef.on('child_added', snap => {
      if (currentUserUid !== span.key) {
        let user = snap.val()
        user['uid'] = snap.key
        user['status'] = 'offline'
        loadedUsers.push(user)
        this.setState({ users: loadedUsers })
      }
    })

    this.state.connectedRef.on('value', snap => {
      if (snap.val() === true) {
        const ref = this.state.presenceRef.child(currentUserUid)
        ref.set(true)
        ref.onDisconnect().remove(err => {
          if (err !== null) {
            console.log(err)
          }
        })
      }
    })

    this.state.presenceRef.on('child_added', snap => {
      if (currentUserUid !== snap.key) {
        // add status to user
      }
    })

    this.state.presenceRef.on('child_remove', snap => {
      if (currentUserUid !== snap.key) {
        // add status to user
      }
    })
  }

  render() {
    const { users } = this.state

    return (
      <Menu.Menu className='menu'>
        <Menu.Item>
          <span>
            <Icon name='mail' /> DIRECT MESSAGES
          </span> 
          ({ users.length})
        </Menu.Item>
        {/* users to send direct messages */}
      </Menu.Menu>
    )
  }
}

export default DirectMessages