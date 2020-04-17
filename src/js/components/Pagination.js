import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uv4 } from 'uuid';

class Pagination extends Component {
  render() {
    let currentPage = this.props.match.params.num * 1;
    let totalResults = this.props.results[0];
    let totalPages = Math.ceil(totalResults / 20);
    let visiblePages = [];
    for (
      let i = currentPage - 2, j = 0, l = 0;
      i <= totalPages && j < 3;
      i++, l++
    ) {
      if (i < 1) continue;
      if (i + 2 < totalPages && l == 0) continue;
      visiblePages.push(i);
      j = visiblePages.length;
    }

    let previousClass = currentPage < 2 ? 'page-item disabled' : 'page-item';
    let nextClass =
      currentPage === totalPages ? 'page-item disabled' : 'page-item';
    return (
      <nav aria-label="...">
        <ul className="pagination">
          <li className={previousClass}>
            <Link
              to={'/results/page/' + (currentPage - 1)}
              className="page-link"
              tabIndex="-1"
            >
              Previous
            </Link>
          </li>
          {visiblePages.map((el) => {
            let pagClass;
            if (el === currentPage) {
              pagClass = 'page-item active';
            } else {
              pagClass = 'page-item';
            }
            return (
              <li key={uv4()} className={pagClass}>
                <Link to={'/results/page/' + el} className="page-link">
                  {el}
                </Link>
              </li>
            );
          })}
          <li className={nextClass}>
            <Link
              to={'/results/page/' + (currentPage + 1)}
              className="page-link"
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Pagination;
