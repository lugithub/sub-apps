import React, { Component } from 'react'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

import reducer from '../reducers'
import SetName from './SetName'

class SubApp extends Component {
  constructor(props) {
    super(props)
    this.store = createStore(reducer)
  }

  render() {
    return (
      <Provider store={this.store}>
          <SetName />
      </Provider>
    )
  }
}

export default SubApp
