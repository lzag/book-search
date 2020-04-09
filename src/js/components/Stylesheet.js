import React, { Component } from 'react';
import { Consumer } from './Context';

class Stylesheet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <link rel="stylesheet" type="text/css" href={this.props.link} />
      </React.Fragment>
    );
  }
}

export default Stylesheet;
