import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Consumer } from './Context';

class Header extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div>
              <h1>Header</h1>
              <div>{value.someValue}</div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Header;
