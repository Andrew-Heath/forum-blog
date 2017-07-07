import React, {Component} from 'react';
// import {PropTypes} from 'react';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <span className="username">{this.props.username}: </span><span className="post-body">{this.props.body}</span>
      </div>
    );
  }
}

// Reference of proptype checking
// Header.propTypes = {
//   addTodo: PropTypes.func.isRequired
// };

export default Post;
