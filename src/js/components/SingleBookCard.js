import React, { Component } from 'react';
import axios from 'axios';
const goodreadsApi = axios.create({
  baseURL: 'http://localhost:8888',
});

class SingleBookCard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.getBookInfo()
      .then((results) => {
        return this.setState({
          isLoaded: true,
          reviewsWidget: results.data.GoodreadsResponse.book[0].reviews_widget,
        });
      })
      .catch((err) => {
        console.log('There has been an error');
        return this.setState({ isError: true });
      });
  }

  getBookInfo() {
    return new Promise((res, rej) => {
      goodreadsApi
        .post('/goodreads', {
          method: 'GET',
          endpoint: '/book/show.xml',
          parameters: {
            id: this.props.bookId,
          },
        })
        .then((results) => {
          return res(results);
        })
        .catch((error) => {
          return rej(error);
        });
    });
  }
  getReviewsWidget() {
    return { __html: this.state.reviewsWidget };
  }
  render() {
    if (this.state.isLoaded !== true && this.state.isError !== true) {
      return (
        <div className="loader center">
          <i
            className="fa-5x fas fa-spinner fa-spin"
            style={{ color: 'black' }}
          ></i>
        </div>
      );
    } else if (this.state.isError === true) {
      return (
        <div style={{ color: 'black' }}>
          There has been an error! Please try again
        </div>
      );
    } else {
      return <div dangerouslySetInnerHTML={this.getReviewsWidget()} />;
    }
  }
}
export default SingleBookCard;
