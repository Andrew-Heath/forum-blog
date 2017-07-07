import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
// import {PropTypes} from 'react';

class PostSubmit extends Component {
  render() {
    return (
      <div className="post-submit">
        <div>Post as: {this.props.username}</div>
        <textarea className="input-box" placeholder="Write your post here."/>
        <button className="submit">Submit Post</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.updateUsername.username
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

// Reference of proptype checking
// Header.propTypes = {
//   addTodo: PropTypes.func.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(PostSubmit);
