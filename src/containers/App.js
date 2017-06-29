import React, {Component} from 'react';
// import {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ThreadFrame from '../components/ThreadFrame';
import * as ThreadActions from '../actions/index';

class App extends Component {
  render() {
    return (
      <div>
        This is the main app
        <ThreadFrame/>
      </div>
    );
  }
}

// App.propTypes = {
//   todos: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// };

function mapStateToProps(state) {
  return {
    things: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ThreadActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
