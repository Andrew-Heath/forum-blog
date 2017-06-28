import React, {Component} from 'react';
import axios from 'axios';

import {Tech} from './tech';

export class Techs extends Component {
  constructor() {
    super();
    this.state = {techs: []};
  }

  componentDidMount() {
    axios
      .get('app/techs/techs.json')
      .then(response => {
        this.setState({techs: response.data});
      });
  }

  render() {
    return (
      <div className="container">
        <h2 className="techs-title">
          Cooked with all these awesome technologies:
        </h2>
        <div className="techs-list">
          {this.state.techs.map((tech, i) => (
            <Tech key={i} tech={tech}/>
          ))}
        </div>
      </div>
    );
  }
}
