import React, { Component } from 'react';
import { Consumer } from './Context';

class ModalButton extends Component {
  constructor() {
    super();
  }
  launchModal(e, toggleModal) {
    toggleModal();
  }
  render() {
    return (
      <Consumer>
        {(value) => (
          <button
            onClick={(e) => {
              console.log(value);
              return this.launchModal(e, value.toggleModal);
            }}
            type="button"
            className="btn btn-primary"
          >
            Launch demo modal
          </button>
        )}
      </Consumer>
    );
  }
}

export default ModalButton;
