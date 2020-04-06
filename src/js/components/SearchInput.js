import React, { Component } from 'react';

class SearchInput extends Component {
  componentDidUpdate() {
    console.log('The input has been updated...');
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="author-search-form">
          Please input the author's name for the search
        </label>
        <input id="author-search-form" type="text" />
      </div>
    );
  }
}

export default SearchInput;
