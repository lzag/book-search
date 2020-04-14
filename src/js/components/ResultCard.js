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
  render() {
    const { id, title, author, rating, pubYear } = this.props;
    let href = 'https://www.goodreads.com/book/show/' + id;
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="card" style={style}>
              <div className="card-body">
                <h5 className="card-title">
                  <span>
                    <i
                      style={{ cursor: 'pointer' }}
                      className="fas fa-chevron-down px-2"
                      onClick={(e) => {
                        this.state.collapsed === 'none'
                          ? this.setState({ collapsed: 'block' })
                          : this.setState({ collapsed: 'none' });
                      }}
                    ></i>
                  </span>
                  {title}
                </h5>
                <div style={{ display: this.state.collapsed }}>
                  <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
                  <p className="card-text">
                    The book was published originally in
                    {pubYear} has a an average rating of {rating}
                  </p>
                  <a href={href} className="card-link">
                    See on Goodreads
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      value.toggleModal(e, id);
                    }}
                    className="card-link"
                  >
                    Peek reviews on Goodreads
                  </a>
                  <a href="#">More from {author}</a>
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
