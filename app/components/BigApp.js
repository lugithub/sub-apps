import React, { Component } from 'react'
import { connect } from 'react-redux'

import SubApp from '../containers/SubApp'

const BigApp = () => (
  <div>
    <SubApp />
    <SubApp />
    <SubApp />
  </div>
);

export default BigApp
