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
  onSubmitHandler(e, query) {
    e.preventDefault();
    console.log(query);
    instance
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((results) => {
        console.log(results);
      });
  }
  render() {
    return (
      <Consumer>
        {(value) => (
          <form onSubmit={(e) => this.onSubmitHandler(e, value.query)}>
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
