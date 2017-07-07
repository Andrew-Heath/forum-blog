import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
// import {PropTypes} from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const uname = e.target.value;
    this.props.actions.updateUsername(uname);
  }

  render() {
    return (
      <header>
        <div className="title">Forum</div>
        <div className="subtitle">A place to post whatever.</div>
        <div className="user-tools">Username: <input type="text" className="username-input" placeholder="Username" onChange={this.handleChange}/></div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return state;
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
