import React, { Component } from 'react';
import { Consumer } from './Context';
import Header from './Header';
import Form from './Form';
import Stylesheet from './Stylesheet';
import SearchResults from './SearchResults';
import Navbar from './Navbar';
import Modal from './Modal';
import ModalButton from './ModalButton.js';
import { MyProvider } from './Context';
import RecentSearches from './RecentSearches';
import NotFound from './NotFound';
import About from './About';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="container">
              <Navbar />
              <Modal />
              <Switch>
                <Route path="/my-account" component={Form} />
                <Route path="/about" component={About} />
                <Route
                  path="/"
                  render={(props) => {
                    return (
                      <React.Fragment>
                        <RecentSearches {...props} />
                        <Form {...props} />
                      </React.Fragment>
                    );
                  }}
                />
                <Route component={NotFound} />
              </Switch>
              <Stylesheet link={value.css} />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Layout;
