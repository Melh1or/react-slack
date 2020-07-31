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

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer