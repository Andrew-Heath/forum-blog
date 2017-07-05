import React, {Component} from 'react';
// import {PropTypes} from 'react';

class PostSubmit extends Component {
  render() {
    return (
      <div className="post-submit">
        This is the Post Submission Box<br/>
        <textarea className="input-box" placeholder="Write your post here."/>
        <button className="submit">Submit Post</button>
      </div>
    );
  }
}

// Reference of proptype checking
// Header.propTypes = {
//   addTodo: PropTypes.func.isRequired
// };

export default PostSubmit;
