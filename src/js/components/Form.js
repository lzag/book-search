import React, { Component } from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import SearchButton from './SearchButton';
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();
  }
  onSubmitHandler(e) {
    e.preventDefault();
    instance
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((results) => {
        console.log(results);
      });
  }
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <SearchInput />
        <SearchButton />
        <SearchResults />
      </form>
    );
  }
}

export default Form;
