import React, { Component } from 'react';
import { MyProvider } from './Context';
import Layout from './Layout';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <MyProvider>
          <Layout />
        </MyProvider>
      </Router>
    );
  }
}

export default App;
