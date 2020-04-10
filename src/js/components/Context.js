import React, { Component } from 'react';

const ThemeContext = React.createContext('Hello');

export class MyProvider extends Component {
  constructor() {
    super();
    this.state = {
      theme: 'dark',
      query: '',
      results: [
        {
          cardTitle: 'Example result',
          cardSubtitle: 'Example subtitle',
          cardDescription: 'Example description',
          cardId: 'Example ID',
        },
      ],
      dispatch: (action, query) => {
        return this.setState({ query: query });
      },
    };
  }

  render() {
    console.log('The theme is :', this.state.theme);
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const Consumer = ThemeContext.Consumer;
