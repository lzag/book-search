import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="col-8">
          {' '}
          <h2>Goodreads database search App</h2>
          <p>Built with: </p>
          <ul>
            <li>React</li>
            <li>HTML & CSS </li>
            <li>Node.js (proxy serer for CORS request)</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default About;
