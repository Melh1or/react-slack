import * as actionTypes from '../actions/types'
import { combineReducers } from 'redux'

const initialUserState = {
  currentUser: null,
  isLoading: true
}

const userReducer = (state = initialUserState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        currentUser: payload.currentUser,
        isLoading: false
      }
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        isLoading: false,
        currentUser: null
      }
    default:
      return state
  }
}

const initialChannelState = {
  currentChannel: null
}

const channelReducer = (state = initialChannelState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: payload.currentChannel
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  channel: channelReducer
})

export default rootReducer