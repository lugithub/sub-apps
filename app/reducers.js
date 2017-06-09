import { combineReducers } from 'redux'
import undoable, { distinctState } from 'redux-undo'

function name(state = 'type your name', action) {
  switch (action.type) {
    case 'SET_NAME':
      return action.name;
    default:
      return state
  }
}

const app = combineReducers({
  name
})

export default app
