import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="col-8 ml-5">
          {' '}
          <h2>Goodreads database search App</h2>
          <hr />
          <h5>
            <p>
              The app lets you search the Goodreads database and saves the
              results to the local storage. It saves the history of searches and
              the number of results.
            </p>
            <p>Built with: </p>
            <ul>
              <li>React</li>
              <li>HTML & CSS </li>
              <li>Node.js (proxy server for CORS request)</li>
            </ul>
          </h5>
        </div>
      </div>
    );
  }
}
export default About;
