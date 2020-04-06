import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';

import { MyProvider } from './Context';

class App extends Component {
  constructor() {
    super();
    this.value = {
      someValue: 'Test value',
    };
  }
  render() {
    return (
      <MyProvider>
        <div>
          <Header />
          <Form />
        </div>
      </MyProvider>
    );
  }
}

export default App;
