import React, { Component } from 'react';
import { Consumer } from './Context';

const style = {
  width: '80%',
};

class ResultCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: 'none',
    };
  }
  getStarRating(rating) {
    let stars = {
      first: '',
      second: '',
      third: '',
      fourth: '',
      fifth: '',
    };
    Object.keys(stars)
      .reverse()
      .forEach((star, index) => {
        if (rating - (4 - index) > 0.75) {
          stars[star] += 'fas fa-star';
        } else if (rating - (4 - index) > 0.25) {
          stars[star] += 'fas fa-star-half-alt';
        } else {
          stars[star] += 'far fa-star';
        }
      });
    return stars;
  }
  render() {
    const { id, title, author, rating, pubYear } = this.props;
    let stars = this.getStarRating(rating);
    let href = 'https://www.goodreads.com/book/show/' + id;
    return (
      <Consumer>
        {(value) => {
          console.log(title.length);
          return (
            <div className="card w-100" style={style}>
              <div className="card-body">
                <h5
                  onClick={(e) => {
                    this.state.collapsed === 'none'
                      ? this.setState({ collapsed: 'block' })
                      : this.setState({ collapsed: 'none' });
                  }}
                  className="card-title font-weight-bold"
                  style={{ cursor: 'pointer' }}
                >
                  <span>
                    <i className="fas fa-chevron-down px-2"></i>
                  </span>
                  {title.length > 72
                    ? title.substr(0, 70).trim() + '...'
                    : title}
                  <i className={'ml-2 ' + stars.first}></i>
                  <i className={stars.second}></i>
                  <i className={stars.third}></i>
                  <i className={stars.fourth}></i>
                  <i className={stars.fifth}></i>
                </h5>
                <div style={{ display: this.state.collapsed }}>
                  <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
                  <p className="card-text">
                    {`The book was published originally in ` +
                      `${pubYear} has a an average rating of ${rating}`}
                  </p>
                  <a href={href} className="card-link">
                    See on Goodreads
                  </a>
                  <span> | </span>
                  <a
                    href="#"
                    onClick={(e) => {
                      value.toggleModal(e, id);
                    }}
                    className="card-link"
                  >
                    Peek reviews on Goodreads
                  </a>
                  <span> | </span>
                  <a href="#"> More from {author}</a>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default ResultCard;
