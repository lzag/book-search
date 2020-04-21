import React, { Component } from 'react';
import axios from 'axios';

const ThemeContext = React.createContext('Hello');
const instance = axios.create({
  baseURL: 'http://localhost:8888',
});

const themes = {
  dark: '../../../src/css/bootstrap.min.css',
  light: '../../../src/css/bootstrap-light.min.css',
  sketchy: '../../../src/css/bootstrap-sketchy.min.css',
};

export class MyProvider extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.onEscKeyDown = this.onEscKeyDown.bind(this);
    this.state = {
      isModalOpen: false,
      theme: 'dark',
      css: '../../../src/css/bootstrap.min.css',
      bookId: '2956',
      history: { Finn: { results: 800 }, Quijote: { results: 1000 } },
      currentSearch: [
        {
          query: ['Twain'],
          'results-start': ['1'],
          'results-end': ['20'],
          'total-results': ['2093'],
          source: ['Goodreads'],
          'query-time-seconds': ['0.04'],
          results: [
            {
              work: [
                {
                  id: ['540922'],
                  books_count: ['83'],
                  ratings_count: ['6137'],
                  text_reviews_count: ['191'],
                  original_publication_year: ['1957'],
                  original_publication_month: [''],
                  original_publication_day: [''],
                  average_rating: ['4.28'],
                  best_book: [
                    {
                      id: ['2968'],
                      title: ['The Complete Short Stories of Mark Twain'],
                      author: [
                        {
                          id: ['1244'],
                          name: ['Mark Twain'],
                        },
                      ],
                      image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
                      ],
                      small_image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
                      ],
                    },
                  ],
                },
                {
                  id: ['13039075'],
                  books_count: ['38'],
                  ratings_count: ['6766'],
                  text_reviews_count: ['722'],
                  original_publication_year: ['1925'],
                  original_publication_month: ['1'],
                  original_publication_day: ['1'],
                  average_rating: ['3.86'],
                  best_book: [
                    {
                      id: ['8192278'],
                      title: [
                        'Autobiography of Mark Twain, Volume 1: The Complete and Authoritative Edition',
                      ],
                      author: [
                        {
                          id: ['1244'],
                          name: ['Mark Twain'],
                        },
                      ],
                      image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1287702402l/8192278._SX98_.jpg',
                      ],
                      small_image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1287702402l/8192278._SX50_.jpg',
                      ],
                    },
                  ],
                },
                {
                  id: ['16302762'],
                  books_count: ['74'],
                  ratings_count: ['3269'],
                  text_reviews_count: ['265'],
                  original_publication_year: ['1959'],
                  original_publication_month: ['4'],
                  original_publication_day: [''],
                  average_rating: ['4.05'],
                  best_book: [
                    {
                      id: ['2971'],
                      title: ['The Autobiography of Mark Twain'],
                      author: [
                        {
                          id: ['1244'],
                          name: ['Mark Twain'],
                        },
                      ],
                      image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
                      ],
                      small_image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
                      ],
                    },
                  ],
                },
                {
                  id: ['19101052'],
                  books_count: ['10'],
                  ratings_count: ['3542'],
                  text_reviews_count: ['540'],
                  original_publication_year: ['2011'],
                  original_publication_month: ['9'],
                  original_publication_day: ['27'],
                  average_rating: ['3.71'],
                  best_book: [
                    {
                      id: ['13538702'],
                      title: ['Sailor Twain: Or: The Mermaid in the Hudson'],
                      author: [
                        {
                          id: ['5832526'],
                          name: ['Mark  Siegel'],
                        },
                      ],
                      image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1526427669l/13538702._SX98_.jpg',
                      ],
                      small_image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1526427669l/13538702._SX50_.jpg',
                      ],
                    },
                  ],
                },
                {
                  id: ['44804782'],
                  books_count: ['7'],
                  ratings_count: ['1293'],
                  text_reviews_count: ['334'],
                  original_publication_year: ['2015'],
                  original_publication_month: ['10'],
                  original_publication_day: ['13'],
                  average_rating: ['3.56'],
                  best_book: [
                    {
                      id: ['25111073'],
                      title: ["Twain's End"],
                      author: [
                        {
                          id: ['56747'],
                          name: ['Lynn Cullen'],
                        },
                      ],
                      image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1437050212l/25111073._SX98_.jpg',
                      ],
                      small_image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1437050212l/25111073._SY75_.jpg',
                      ],
                    },
                  ],
                },
                {
                  id: ['6851'],
                  books_count: ['3'],
                  ratings_count: ['1191'],
                  text_reviews_count: ['71'],
                  original_publication_year: ['1995'],
                  original_publication_month: [''],
                  original_publication_day: [''],
                  average_rating: ['4.16'],
                  best_book: [
                    {
                      id: ['2969'],
                      title: ['The Bible According to Mark Twain'],
                      author: [
                        {
                          id: ['1244'],
                          name: ['Mark Twain'],
                        },
                      ],
                      image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
                      ],
                      small_image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
                      ],
                    },
                  ],
                },
                {
                  id: ['50650494'],
                  books_count: ['6'],
                  ratings_count: ['811'],
                  text_reviews_count: ['177'],
                  original_publication_year: ['2017'],
                  original_publication_month: ['1'],
                  original_publication_day: ['24'],
                  average_rating: ['3.93'],
                  best_book: [
                    {
                      id: ['30199431'],
                      title: [
                        'The True Flag: Theodore Roosevelt, Mark Twain, and the Birth of American Empire',
                      ],
                      author: [
                        {
                          id: ['6333'],
                          name: ['Stephen Kinzer'],
                        },
                      ],
                      image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463930006l/30199431._SX98_.jpg',
                      ],
                      small_image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463930006l/30199431._SY75_.jpg',
                      ],
                    },
                  ],
                },
                {
                  id: ['25441282'],
                  books_count: ['4'],
                  ratings_count: ['580'],
                  text_reviews_count: ['128'],
                  original_publication_year: ['2014'],
                  original_publication_month: ['3'],
                  original_publication_day: ['20'],
                  average_rating: ['3.80'],
                  best_book: [
                    {
                      id: ['18114052'],
                      title: [
                        'The Bohemians: Mark Twain and the San Francisco Writers Who Reinvented American Literature',
                      ],
                      author: [
                        {
                          id: ['4512598'],
                          name: ['Ben Tarnoff'],
                        },
                      ],
                      image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1381293637l/18114052._SX98_.jpg',
                      ],
                      small_image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1381293637l/18114052._SY75_.jpg',
                      ],
                    },
                  ],
                },
                {
                  id: ['2325522'],
                  books_count: ['16'],
                  ratings_count: ['1502'],
                  text_reviews_count: ['143'],
                  original_publication_year: ['2005'],
                  original_publication_month: [''],
                  original_publication_day: [''],
                  average_rating: ['4.06'],
                  best_book: [
                    {
                      id: ['2970'],
                      title: ['Mark Twain'],
                      author: [
                        {
                          id: ['2027'],
                          name: ['Ron Powers'],
                        },
                      ],
                      image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400889177l/2970._SX98_.jpg',
                      ],
                      small_image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400889177l/2970._SY75_.jpg',
                      ],
                    },
                  ],
                },
                {
                  id: ['6847'],
                  books_count: ['20'],
                  ratings_count: ['1391'],
                  text_reviews_count: ['82'],
                  original_publication_year: ['1987'],
                  original_publication_month: ['9'],
                  original_publication_day: [''],
                  average_rating: ['4.20'],
                  best_book: [
                    {
                      id: ['2965'],
                      title: ['The Wit and Wisdom of Mark Twain'],
                      author: [
                        {
                          id: ['1244'],
                          name: ['Mark Twain'],
                        },
                      ],
                      image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
                      ],
                      small_image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
                      ],
                    },
                  ],
                },
                {
                  id: ['44751821'],
                  books_count: ['2'],
                  ratings_count: ['595'],
                  text_reviews_count: ['118'],
                  original_publication_year: ['2015'],
                  original_publication_month: ['11'],
                  original_publication_day: ['3'],
                  average_rating: ['3.51'],
                  best_book: [
                    {
                      id: ['25067001'],
                      title: ['Twain & Stanley Enter Paradise'],
                      author: [
                        {
                          id: ['7457'],
                          name: ['Oscar Hijuelos'],
                        },
                      ],
                      image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439482987l/25067001._SX98_.jpg',
                      ],
                      small_image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439482987l/25067001._SX50_.jpg',
                      ],
                    },
                  ],
                },
                {
                  id: ['95577'],
                  books_count: ['9'],
                  ratings_count: ['1515'],
                  text_reviews_count: ['26'],
                  original_publication_year: ['1976'],
                  original_publication_month: ['3'],
                  original_publication_day: ['1'],
                  average_rating: ['4.43'],
                  best_book: [
                    {
                      id: ['527211'],
                      title: ['The Unabridged Mark Twain'],
                      author: [
                        {
                          id: ['1244'],
                          name: ['Mark Twain'],
                        },
                      ],
                      image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
                      ],
                      small_image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
                      ],
                    },
                  ],
                },
                {
                  id: ['462383'],
                  books_count: ['11'],
                  ratings_count: ['1579'],
                  text_reviews_count: ['22'],
                  original_publication_year: ['1884'],
                  original_publication_month: [''],
                  original_publication_day: [''],
                  average_rating: ['4.24'],
                  best_book: [
                    {
                      id: ['1544715'],
                      title: ['Mark Twain'],
                      author: [
                        {
                          id: ['1244'],
                          name: ['Mark Twain'],
                        },
                      ],
                      image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566595789l/1544715._SX98_.jpg',
                      ],
                      small_image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566595789l/1544715._SX50_.jpg',
                      ],
                    },
                  ],
                },
                {
                  id: ['73292335'],
                  books_count: ['1'],
                  ratings_count: ['792'],
                  text_reviews_count: ['138'],
                  original_publication_year: [''],
                  original_publication_month: [''],
                  original_publication_day: [''],
                  average_rating: ['3.80'],
                  best_book: [
                    {
                      id: ['7792730'],
                      title: [
                        "Twain's Feast: Searching for America's Lost Foods in the Footsteps of Samuel Clemens",
                      ],
                      author: [
                        {
                          id: ['253864'],
                          name: ['Andrew Beahrs'],
                        },
                      ],
                      image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
                      ],
                      small_image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
                      ],
                    },
                  ],
                },
                {
                  id: ['1359952'],
                  books_count: ['24'],
                  ratings_count: ['1000'],
                  text_reviews_count: ['184'],
                  original_publication_year: ['2008'],
                  original_publication_month: ['1'],
                  original_publication_day: ['1'],
                  average_rating: ['3.51'],
                  best_book: [
                    {
                      id: ['1251910'],
                      title: [
                        'Wild Nights!: Stories About the Last Days of Poe, Dickinson, Twain, James, and Hemingway',
                      ],
                      author: [
                        {
                          id: ['3524'],
                          name: ['Joyce Carol Oates'],
                        },
                      ],
                      image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
                      ],
                      small_image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
                      ],
                    },
                  ],
                },
                {
                  id: ['39573133'],
                  books_count: ['24'],
                  ratings_count: ['476'],
                  text_reviews_count: ['77'],
                  original_publication_year: ['1924'],
                  original_publication_month: ['1'],
                  original_publication_day: ['1'],
                  average_rating: ['4.28'],
                  best_book: [
                    {
                      id: ['17347793'],
                      title: [
                        'Autobiography of Mark Twain, Volume 2: The Complete and Authoritative Edition',
                      ],
                      author: [
                        {
                          id: ['1244'],
                          name: ['Mark Twain'],
                        },
                      ],
                      image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
                      ],
                      small_image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
                      ],
                    },
                  ],
                },
                {
                  id: ['45269518'],
                  books_count: ['8'],
                  ratings_count: ['170'],
                  text_reviews_count: ['34'],
                  original_publication_year: ['2015'],
                  original_publication_month: ['10'],
                  original_publication_day: ['15'],
                  average_rating: ['4.32'],
                  best_book: [
                    {
                      id: ['25494458'],
                      title: [
                        'Autobiography of Mark Twain, Volume 3: The Complete and Authoritative Edition',
                      ],
                      author: [
                        {
                          id: ['1244'],
                          name: ['Mark Twain'],
                        },
                      ],
                      image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1430944491l/25494458._SX98_.jpg',
                      ],
                      small_image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1430944491l/25494458._SX50_.jpg',
                      ],
                    },
                  ],
                },
                {
                  id: ['7232814'],
                  books_count: ['3'],
                  ratings_count: ['966'],
                  text_reviews_count: ['254'],
                  original_publication_year: ['2010'],
                  original_publication_month: [''],
                  original_publication_day: [''],
                  average_rating: ['3.98'],
                  best_book: [
                    {
                      id: ['6990402'],
                      title: [
                        'The Extraordinary Mark Twain (According To Susy)',
                      ],
                      author: [
                        {
                          id: ['25386'],
                          name: ['Barbara Kerley'],
                        },
                      ],
                      image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1305746313l/6990402._SX98_.jpg',
                      ],
                      small_image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1305746313l/6990402._SX50_.jpg',
                      ],
                    },
                  ],
                },
                {
                  id: ['6715036'],
                  books_count: ['107'],
                  ratings_count: ['2005'],
                  text_reviews_count: ['41'],
                  original_publication_year: ['1910'],
                  original_publication_month: [''],
                  original_publication_day: [''],
                  average_rating: ['4.42'],
                  best_book: [
                    {
                      id: ['6523118'],
                      title: ['The Complete Mark Twain Collection'],
                      author: [
                        {
                          id: ['1244'],
                          name: ['Mark Twain'],
                        },
                      ],
                      image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
                      ],
                      small_image_url: [
                        'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
                      ],
                    },
                  ],
                },
                {
                  id: ['66201392'],
                  books_count: ['1'],
                  ratings_count: ['9'],
                  text_reviews_count: ['5'],
                  original_publication_year: [''],
                  original_publication_month: [''],
                  original_publication_day: [''],
                  average_rating: ['4.33'],
                  best_book: [
                    {
                      id: ['42478798'],
                      title: [
                        'Best Critical Writing: Selections from Oscar Wilde, Samuel Johnson, Mark Twain, Matthew Arnold, Edgar Allan Poe, and Others',
                      ],
                      author: [
                        {
                          id: ['3565'],
                          name: ['Oscar Wilde'],
                        },
                      ],
                      image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556997444l/42478798._SX98_.jpg',
                      ],
                      small_image_url: [
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556997444l/42478798._SY75_.jpg',
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],

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
      updateResults: (query, page = 1) => {
        instance
          .post('/goodreads', {
            method: 'GET',
            endpoint: '/search/index.xml',
            parameters: { q: query, ['search[field]']: 'title', page: page },
          })
          .then((results) => {
            const currentSearch = results.data.GoodreadsResponse.search;
            console.log(results.data.GoodreadsResponse);
            console.log(
              results.data.GoodreadsResponse.search[0].results[0].work
            );
            const newHistory = {
              ...this.state.history,
              [currentSearch[0].query[0]]: {
                results: [currentSearch[0]['total-results']],
              },
            };
            console.log('the page is: ', page, ' and the query: ', query);
            this.setState({
              query: query,
              page: page,
              currentSearch: currentSearch,
              history: newHistory,
            });
          })
          .catch((error) => console.log(error));
      },
      toggleModal: (e, bookId) => {
        this.setState({ isModalOpen: !this.state.isModalOpen, bookId: bookId });
      },
      deleteHistory: (el) => {
        const history = this.state.history;
        delete history[el];
        // const newHistory = oldHistory.filter((item) => item !== el);
        this.setState({ history: history });
      },
      toggleTheme: () => {
        const activeThemes = Object.keys(themes);
        const nextTheme = activeThemes.indexOf(this.state.theme) + 1;
        if (nextTheme < activeThemes.length) {
          this.setState({
            theme: activeThemes[nextTheme],
            css: themes[activeThemes[nextTheme]],
          });
        } else {
          this.setState({
            theme: activeThemes[0],
            css: themes[activeThemes[0]],
          });
        }
      },
    };
  }
  componentDidMount() {
    window.addEventListener('keydown', this.onEscKeyDown, false);
    let localConfig = localStorage.getItem('goodreads-app-config');
    if (localStorage !== null) {
      localConfig = JSON.parse(localConfig);
      this.setState(localConfig);
    }
  }
  componentDidUpdate() {
    localStorage.setItem('goodreads-app-config', JSON.stringify(this.state));
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
