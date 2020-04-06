import React, { Component } from 'react';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [
        {
          key: 12345,
          authorName: 'Default',
          bookTitle: 'Default',
          bookRating: 'Default',
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.results.map((result) => {
          return (
            <div key={result.key} className="card" style={style}>
              <div className="card-body">
                <h5 className="card-title">{result.authorName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {result.bookTitle}
                </h6>
                <p className="card-text">
                  The book {result.bookTitle} has a an average rating of{' '}
                  {result.bookRating}
                </p>
                <a
                  href="https://www.goodreads.com/book/show/{result.key}"
                  className="card-link"
                >
                  See on Goodreads
                </a>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

const style = {
  width: '18rem',
};

export default SearchResults;
