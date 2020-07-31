import * as actionTypes from '../actions/types'
import { combineReducers } from 'redux'

const initialState = {
  currentUser: null,
  isLoading: true
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        currentUser: payload.currentUser,
        isLoading: false
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer