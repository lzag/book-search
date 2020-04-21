import React, { Component } from 'react';
import { Consumer } from './Context';
import ReactDom from 'react-dom';
import ReviewsPreview from './ReviewsPreview';

const styleModalOpen = {
  display: 'block' /* Hidden by default */,
  position: 'fixed' /* Stay in place */,
  zIndex: 10 /* Sit on top */,
  left: 0,
  top: 0,
  width: '100%' /* Full width */,
  height: '100%' /* Full height */,
  overflow: 'auto' /* Enable scroll if needed */,
  backgroundColor: 'rgb(0,0,0)' /* Fallback color */,
  backgroundColor: 'rgba(0,0,0,0.4)' /* Fallback color */,
};

const styleModalClosed = {
  display: 'none',
  position: 'fixed' /* Stay in place */,
  zIndex: 1 /* Sit on top */,
  left: 0,
  top: 0,
  width: '100%' /* Full width */,
  height: '100%' /* Full height */,
  overflow: 'auto' /* Enable scroll if needed */,
  backgroundColor: 'rgb(0,0,0)',
  backgroundColor: 'rgba(0,0,0,0.4)' /* Fallback color */,
};

const styleModalContent = {
  justifyContent: 'center',
  backgroundColor: '#fefefe',
  margin: '5% auto' /* 15% from the top and centered */,
  padding: '20px',
  border: '1px solid #888',
  width: '50%' /* Could be more or less, depending on screen size */,
};

const styleCloseButton = {
  color: '#000',
  float: 'right',
  fontSize: '28pxr',
  fontWeight: 'bold',
  cursor: 'pointer',
};
class Modal extends Component {
  render() {
    return ReactDom.createPortal(
      <Consumer>
        {(value) => {
          return (
            <React.Fragment>
              <div
                onClick={(e) => {
                  if (e.target.id !== 'myModal') return;
                  value.toggleModal();
                }}
                id="myModal"
                style={value.isModalOpen ? styleModalOpen : styleModalClosed}
              >
                <div className="modal-content" style={styleModalContent}>
                  <span
                    onClick={(e) => {
                      value.toggleModal();
                    }}
                    className="close"
                    style={styleCloseButton}
                  >
                    &times;
                  </span>
                  {value.isModalOpen && (
                    <ReviewsPreview bookId={value.bookId} />
                  )}
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>,
      document.getElementById('modal')
    );
  }
}

export default Modal;
