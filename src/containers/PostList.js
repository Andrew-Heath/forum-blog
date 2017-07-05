import React, {Component} from 'react';
// import {PropTypes} from 'react';
import Post from '../components/Post';

class PostList extends Component {
  render() {
    return (
      <div className="post-list">
        This is the Post List
        <Post/>
      </div>
    );
  }
}

// Reference of proptype checking
// Header.propTypes = {
//   addTodo: PropTypes.func.isRequired
// };

export default PostList;
