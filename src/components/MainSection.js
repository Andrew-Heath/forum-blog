import React, {Component, PropTypes} from 'react';
import Footer from './Footer';
import {SHOW_ALL} from '../constants/TodoFilters';

class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {filter: SHOW_ALL};
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleCompleteAll = this.handleCompleteAll.bind(this);
  }

  handleClearCompleted() {
    this.props.actions.clearCompleted();
  }

  handleCompleteAll() {
    this.props.actions.completeAll();
  }

  handleShow(filter) {
    this.setState({filter});
  }

  renderToggleAll(completedCount) {
    const {todos} = this.props;
    if (todos.length > 0) {
      return (
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCount === todos.length}
          onChange={this.handleCompleteAll}
          />
      );
    }
  }

  renderFooter(completedCount) {
    const {todos} = this.props;
    const {filter} = this.state;
    const activeCount = todos.length - completedCount;

    if (todos.length) {
      return (
        <Footer
          completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={this.handleClearCompleted}
          onShow={this.handleShow}
          />
      );
    }
  }

  render() {
    const {todos} = this.props;

    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    );

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list"/>
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection;
