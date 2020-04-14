import React, { Component } from 'react';
import { Consumer } from './Context';
import { v4 as uv4 } from 'uuid';

const closeBtn = {
  cursor: 'pointer',
};

class RecentSearches extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div>
              <div> These are your recent searches: </div>
              <div>
                {value.history.map((item) => {
                  return (
                    <span className="badge badge-primary m-1" key={uv4()}>
                      {item}
                      <i
                        name={item}
                        className="fas fa-times p-1"
                        style={closeBtn}
                        onClick={(e) => {
                          value.deleteHistory(item);
                        }}
                      ></i>
                    </span>
                  );
                })}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default RecentSearches;
