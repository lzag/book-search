import React, { Component } from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import SearchButton from './SearchButton';
import axios from 'axios';
import { Consumer } from './Context';
import { Route } from 'react-router-dom';

class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Consumer>
        {(value) => (
          <React.Fragment>
            <div className="row pt-3">
              <div className="col-8 centered">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (value.query === '') return;
                    value.updateResults(value.query);
                    console.log('submit=', this.props.history);
                    return this.props.history.push('/results/page/1');
                  }}
                >
                  <SearchInput />
                  <SearchButton />
                </form>
              </div>
            </div>
            <hr />
            <Route path="/results" component={SearchResults} />
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}

export default Form;
