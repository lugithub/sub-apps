import React, { Component } from 'react'
import { connect } from 'react-redux'
import SubApp from './subapp'

class BigApp extends Component {
  render() {
    return (
      <div>
        <SubApp />
        <SubApp />
        <SubApp />
      </div>
    )
  }
}

export default connect()(BigApp)
