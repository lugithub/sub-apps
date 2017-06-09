import React, { Component } from 'react'
import { connect } from 'react-redux'

class SetName extends Component {
  render() {
    return (
        <div>hello {this.props.name}
          <button onClick={this.props.onClick}>set name</button>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    name: state.name
  }
)

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch({type: 'SET_NAME', name: Date.now()})
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(SetName)
