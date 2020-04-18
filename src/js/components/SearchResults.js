import React, { Component } from 'react';
import { Consumer } from './Context';
import ResultCard from './ResultCard';
import Pagination from './Pagination';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class SearchResults extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          if (value.currentSearch[0]['total-results'][0] == '0') {
            return <div>Sorry, there were no results for your query :( </div>;
          }
          return (
            <React.Fragment>
              <p>
                There have been {value.currentSearch[0]['total-results']}{' '}
                results for the query "{value.currentSearch[0].query}"
              </p>
              <Route
                path="/results/page/:num"
                render={(props) => {
                  return (
                    <Pagination
                      {...props}
                      results={value.currentSearch[0]['total-results']}
                    />
                  );
                }}
              />
              {value.currentSearch[0].results[0].work.map((result) => {
                let authorName =
                  typeof result.best_book[0].author !== 'undefined'
                    ? result.best_book[0].author[0].name
                    : 'Unknown';
                return (
                  <ResultCard
                    key={result.id[0]}
                    id={result.best_book[0].id[0]}
                    title={result.best_book[0].title}
                    author={authorName}
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
