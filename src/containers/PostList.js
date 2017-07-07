import React, {Component} from 'react';
// import {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import Post from '../components/Post';

class PostList extends Component {
  render() {
    const posts = this.props.postList.map(post => {
      return (<Post key={post.id} username={post.username} body={post.body}/>);
    });

    return (
      <div className="post-list">
        {posts}
      </div>
    );
  }
}

// Reference of proptype checking
// Header.propTypes = {
//   addTodo: PropTypes.func.isRequired
// };

function mapStateToProps(state) {
  return {
    postList: state.submitPost.postList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
