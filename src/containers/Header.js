import React, {Component} from 'react';
// import {PropTypes} from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="title">Forum</div>
        <div className="subtitle">A place to post whatever.</div>
        <div className="user-tools">Username: <input type="text" className="username-input" placeholder="Username"/></div>
      </header>
    );
  }
}

// Reference of proptype checking
// Header.propTypes = {
//   addTodo: PropTypes.func.isRequired
// };

export default Header;
