import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import Stylesheet from './Stylesheet';
import { MyProvider } from './Context';

const cssDark = '../../../src/css/bootstrap.min.css';
const cssLight = '../../../src/css/bootstrap-light.min.css';

class App extends Component {
  constructor() {
    super();
    this.value = {
      theme: 'dark',
      someValue: 'Test value',
    };
    this.state = {
      css: cssDark,
    };
  }

  changeTheme() {
    return this.state.css == cssDark
      ? this.setState({ css: cssLight })
      : this.setState({ css: cssDark });
  }

  render() {
    return (
      <MyProvider>
        <div>
          <Header />
          <Form />
          <StyleButton />
          <button onClick={this.changeTheme.bind(this)}>Change theme</button>
          <Stylesheet link={this.state.css} />
        </div>
      </MyProvider>
    );
  }
}

export default App;
