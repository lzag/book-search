import React, { Component } from 'react';
import { Consumer } from './Context';
import ResultCard from './ResultCard';

class SearchResults extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          if (!value.results) {
            return <div>Sorry, there were no results for your query :( </div>;
          }
          return (
            <React.Fragment>
              {value.results.map((result) => {
                return (
                  <ResultCard
                    key={result.id[0]}
                    id={result.best_book[0].id[0]}
                    title={result.best_book[0].title}
                    author={result.best_book[0].author[0].name}
                    rating={result.average_rating}
                    pubYear={result.original_publication_year}
                  />
                );
              })}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default SearchResults;
