import React, { Component } from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import SearchButton from './SearchButton';
import axios from 'axios';
import { Consumer } from './Context';
import { Route } from 'react-router-dom';

class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Consumer>
        {(value) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (value.query === '') return;
              value.updateResults(value.query);
              console.log('submit=', this.props.history);
              return this.props.history.push('/results/page/1');
            }}
          >
            <SearchInput />
            <SearchButton />
            <Route path="/results" component={SearchResults} />
          </form>
        )}
      </Consumer>
    );
  }
}

export default Form;
