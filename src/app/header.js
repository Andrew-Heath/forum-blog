import React, {Component} from 'react';

export class Header extends Component {
  render() {
    return (
      <header>
        <p className="header-title">
          <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank" rel="noopener noreferrer">
            Fountain Generator
          </a>
        </p>
        <p className="date">
          Generated with FountainJS v1.0.0 on Mon Jun 26 2017 19:17:21 GMT-0700 (PDT)
        </p>
      </header>
    );
  }
}
