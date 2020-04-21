import React, { Component } from 'react';
import { Consumer } from './Context';
import { v4 as uv4 } from 'uuid';
import RecentResultsItem from './RecentResultsItem';

class RecentSearches extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="row mt-3">
              <div className="col-12">
                <span>Your recent searches: </span>
                <div>
                  {Object.entries(value.history).map((item, index) => {
                    const badgeClass =
                      item[1].results != '0'
                        ? 'badge badge-primary m-1'
                        : 'badge badge-danger m-1';
                    return (
                      <RecentResultsItem
                        key={uv4()}
                        className={badgeClass}
                        results={item[1].results}
                        itemName={item[0]}
                        history={this.props.history}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default RecentSearches;
