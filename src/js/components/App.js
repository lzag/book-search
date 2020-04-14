import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import Stylesheet from './Stylesheet';
import SearchResults from './SearchResults';
import Navbar from './Navbar';
import Modal from './Modal';
import ModalButton from './ModalButton.js';
import { MyProvider } from './Context';
import RecentSearches from './RecentSearches';

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
        <div className="container">
          <Navbar />
          <button onClick={this.changeTheme.bind(this)}>Change theme</button>
          <ModalButton />
          <Modal />
          <Header />
          <RecentSearches />
          <Form />
          <Stylesheet link={this.state.css} />
        </div>
      </MyProvider>
    );
  }
}

export default App;
