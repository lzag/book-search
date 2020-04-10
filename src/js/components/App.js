import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import Stylesheet from './Stylesheet';
import SearchResults from './SearchResults';
import { MyProvider } from './Context';

const cssDark = '../../../src/css/bootstrap.min.css';
const cssLight = '../../../src/css/bootstrap-light.min.css';

class App extends Component {
  constructor() {
    super();
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
      <MyProvider value={this.state}>
        <div>
          <Header />
          <Form />
          <button onClick={this.changeTheme.bind(this)}>Change theme</button>
          <Stylesheet link={this.state.css} />
        </div>
      </MyProvider>
    );
  }
}

export default App;
