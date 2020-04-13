import React, { Component } from 'react';
import { Consumer } from './Context';

const style = {
  width: '18rem',
};

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Consumer>
        {(value) => (
          <React.Fragment>
            {value.results.map((result) => {
              let href =
                'https://www.goodreads.com/book/show/' +
                result.best_book[0].id[0];
              return (
                <div key={result.id[0]} className="card" style={style}>
                  <div className="card-body">
                    <h5 className="card-title">{result.best_book[0].title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {result.best_book[0].author[0].name}
                    </h6>
                    <p className="card-text">
                      The book was published originally in
                      {result.original_publication_year} has a an average rating
                      of {result.average_rating}
                    </p>
                    <a href={href} className="card-link">
                      See on Goodreads
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        value.toggleModal(e, result.best_book[0].id[0]);
                      }}
                      className="card-link"
                    >
                      More Information
                    </a>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}

export default SearchResults;
