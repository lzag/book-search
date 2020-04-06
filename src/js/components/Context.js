import React from 'react';

const ThemeContext = React.createContext('Hello');

export class MyProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      someValue: 'This is some value',
    };
  }

  render() {
    console.log(this.state);
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const Consumer = ThemeContext.Consumer;
