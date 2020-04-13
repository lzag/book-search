import React, { Component } from 'react';

const ThemeContext = React.createContext('Hello');

export class MyProvider extends Component {
  constructor() {
    super();
    this.onEscKeyDown = this.onEscKeyDown.bind(this);
    this.state = {
      isModalOpen: true,
      theme: 'dark',
      query: '',
      results: [
        {
          id: ['1835605'],
          books_count: ['5553'],
          ratings_count: ['1115466'],
          text_reviews_count: ['14881'],
          original_publication_year: ['1876'],
          original_publication_month: [''],
          original_publication_day: [''],
          average_rating: ['3.82'],
          best_book: [
            {
              id: ['2956'],
              title: ['The Adventures of Huckleberry Finn'],
              author: [
                {
                  id: ['1244'],
                  name: ['Mark Twain'],
                },
              ],
              image_url: [
                'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546096879l/2956._SX98_.jpg',
              ],
              small_image_url: [
                'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546096879l/2956._SX50_.jpg',
              ],
            },
          ],
        },
      ],
      dispatch: (action, query) => {
        return this.setState({ query: query });
      },
      updateResults: (results) => {
        return this.setState({ results: results });
      },
      toggleModal: () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
      },
    };
  }
  componentDidMount() {
    window.addEventListener('keydown', this.onEscKeyDown, false);
  }
  onEscKeyDown(e) {
    if (e.key !== 'Escape') return;
    this.setState({ isModalOpen: false });
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const Consumer = ThemeContext.Consumer;
