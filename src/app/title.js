import React, {Component} from 'react';

export class Title extends Component {
  render() {
    return (
      <div className="banner-title">
        <h1>&apos;Allo, &apos;Allo!</h1>
        <div>
          <img className="logo" src="http://fountainjs.io/assets/imgs/yeoman.png"/>
          <img className="logo" src="http://fountainjs.io/assets/imgs/fountain.png"/>
        </div>
        <h2 className="title-phrase">Always a pleasure scaffolding your apps.</h2>
      </div>
    );
  }
}
