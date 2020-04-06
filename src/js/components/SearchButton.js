import React, { Component } from 'react';

class SearchButton extends Component {
  constructor() {
    super();
    this.state = {};
  }

  search(e) {
    console.log('Search button just got clicked');
  }

  render() {
    return (
      <button className="btn btn-primary" onClick={this.search}>
        Search
      </button>
    );
  }
}

export default SearchButton;
