import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        Created by Andrew Heath | Email@: <a href="mailto:aheath42@gmail.com">aheath42@gmail.com</a> | <a href="http://www.github.com/andrew-heath">GitHub</a> | <a href="http://www.linkedin.com/in/andrew-heath">LinkedIn</a>
      </footer>
    );
  }
}

// Footer.propTypes = {
//   completedCount: PropTypes.number.isRequired,
//   activeCount: PropTypes.number.isRequired,
//   filter: PropTypes.string.isRequired,
//   onClearCompleted: PropTypes.func.isRequired,
//   onShow: PropTypes.func.isRequired
// };

export default Footer;
