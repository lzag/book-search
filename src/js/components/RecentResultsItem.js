import React, { Component } from 'react';
import { Consumer } from './Context';

const button = {
  cursor: 'pointer',
};

const tagHover = {
  cursor: 'pointer',
  transform: 'scale(1.5)',
};

class RecentResultsItem extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
    };
  }
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <span
              onClick={(e) => {
                value.updateResults(this.props.itemName);
                this.props.history.push('/results/page/1');
              }}
              className={this.props.className}
              style={this.state.hover ? tagHover : button}
              onMouseEnter={(e) => {
                this.setState({ hover: true });
              }}
              onMouseLeave={(e) => {
                this.setState({ hover: false });
              }}
            >
              {this.props.results} {this.props.itemName}
              <i
                className="fas fa-times p-1"
                style={button}
                onClick={(e) => {
                  e.stopPropagation();
                  value.deleteHistory(this.props.itemName);
                }}
              ></i>
            </span>
          );
        }}
      </Consumer>
    );
  }
}
export default RecentResultsItem;
