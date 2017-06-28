import React, {Component} from 'react';
import {Header} from './header';
import {Title} from './title';
import {Techs} from './techs/techs';
import {Footer} from './footer';

export class Main extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <main>
          <Title/>
          <Techs/>
        </main>
        <Footer/>
      </div>
    );
  }
}
