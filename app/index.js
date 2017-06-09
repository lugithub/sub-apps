import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import todoApp from './reducers'
import BigApp from './components/BigApp'

let store = createStore(todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware.withExtraArgument(3))
)

render(
  <Provider store={store}>
    <BigApp  />
  </Provider>,
  document.getElementById('app')
)
