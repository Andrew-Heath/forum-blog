import React, {Component} from 'react';
// import {PropTypes} from 'react';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <span className="username"/><span className="post-body"/>
      </div>
    );
  }
}

// Reference of proptype checking
// Header.propTypes = {
//   addTodo: PropTypes.func.isRequired
// };

export default Post;
