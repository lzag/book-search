import React, { Component } from 'react';
import { Consumer } from './Context';

class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  changeState(dispatch, e) {
    this.setState({ value: e.target.value });
    dispatch('action', e.target.value);
  }

  render() {
    return (
      <Consumer>
        {(value) => (
          <div className="form-group">
            <label htmlFor="author-search-form">
              Please input the author's name for the search
            </label>
            <input
              value={this.state.value}
              onChange={(e) => {
                this.changeState(value.dispatch, e);
              }}
              id="author-search-form"
              type="text"
              placeholder="Please input the title of the book..."
            />
          </div>
        )}
      </Consumer>
    );
  }
}

export default SearchInput;
