import React, { Component } from 'react';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [
        { authorName: 'Default', bookTitle: 'Default', bookRating: 'Default', bookId: 'Default' },
      ],
    };
  }

  render() {
    return (
    <div className="card" style="width: 18rem;">
      <div className="card-body">
        <h5 className="card-title">{this.state.results.authorName</h5>
        <h6 className="card-subtitle mb-2 text-muted">{this.state.results.bookTitle</h6>
        <p className="card-text">{this.state.results.BookTitle} was rated on average {this.state.results.bookRating</p>
        <a href="https://www.goodreads.com/book/show/{this.state.results.bookId}" className="card-link">
        </a>
      </div>
    </div>
)
  }
}

export default SearchResults;
