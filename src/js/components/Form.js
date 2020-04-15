import React, { Component } from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import SearchButton from './SearchButton';
import axios from 'axios';
import { Consumer } from './Context';

class Form extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Consumer>
        {(value) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (value.query === '') return;
              return value.updateResults(value.query);
            }}
          >
            <SearchInput />
            <SearchButton />
            <SearchResults />
          </form>
        )}
      </Consumer>
    );
  }
}

export default Form;
