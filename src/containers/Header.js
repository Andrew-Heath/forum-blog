import React, {Component} from 'react';
// import {PropTypes} from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>This is the Header</h1>
      </header>
    );
  }
}

// Reference of proptype checking
// Header.propTypes = {
//   addTodo: PropTypes.func.isRequired
// };

export default Header;
