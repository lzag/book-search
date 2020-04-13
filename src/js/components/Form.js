import React, { Component } from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import SearchButton from './SearchButton';
import axios from 'axios';
import { Consumer } from './Context';

const instance = axios.create({
  baseURL: 'http://localhost:8888',
});
class Form extends Component {
  constructor() {
    super();
  }
  onSubmitHandler(e, query, updateResults) {
    e.preventDefault();
    instance
      .post('/goodreads', {
        method: 'GET',
        endpoint: '/search/index.xml',
        parameters: { q: query, ['search[field]']: 'author' },
      })
      .then((results) => {
        const works = results.data.GoodreadsResponse.search[0].results[0].work;
        console.log(results.data.GoodreadsResponse.search[0].results[0].work);
        if (works) return updateResults(works);
      });
  }
  render() {
    return (
      <Consumer>
        {(value) => (
          <form
            onSubmit={(e) =>
              this.onSubmitHandler(e, value.query, value.updateResults)
            }
          >
            <SearchInput />
            <SearchButton />
            <SearchResults />
            <button type="submit">Search</button>
          </form>
        )}
      </Consumer>
    );
  }
}

export default Form;
