import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return <div>hello {this.props.name}
      <button onClick={this.props.onClick.bind(null, '123')}>set name</button>
    </div>;
  }
}

const mapStateToProps = state => ({
    name: state.name
  }
)

const mapDispatchToProps = dispatch => ({
    onClick: name => dispatch({type: 'SET_NAME', name: name + Date.now()})
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
