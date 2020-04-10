import React, { Component } from 'react';
import { Consumer } from './Context';

const style = {
  width: '18rem',
};

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
      <Consumer>
        {(value) => (
          <React.Fragment>
            {value.results.map((result) => (
              <div key={result.cardId} className="card" style={style}>
                <div className="card-body">
                  <h5 className="card-title">{result.cardTitle}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    result.cardSubtitle
                  </h6>
                  <p className="card-text">
                    The book {result.cardTitle} has a an average rating of
                    {result.cardSubtitle}
                  </p>
                  <a
                    href="https://www.goodreads.com/book/show/{result.cardId}"
                    className="card-link"
                  >
                    See on Goodreads
                  </a>
                </div>
              </div>
            ))}
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}

export default SearchResults;
