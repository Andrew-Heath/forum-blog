import React, {Component} from 'react';
import PostList from '../containers/PostList';
import PostSubmit from '../containers/PostSubmit';

class ThreadFrame extends Component {
  render() {
    return (
      <div>
        This is the Thread/Chat frame
        <PostList/>
        <PostSubmit/>
      </div>
    );
  }
}

// MainSection.propTypes = {
//   todos: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// };

export default ThreadFrame;
