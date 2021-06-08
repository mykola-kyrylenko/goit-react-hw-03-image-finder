import React from 'react';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }
  closeModal = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  onBackDropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.toggleModal();
    }
  };
  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.onBackDropClick}>
        <div className={s.modal}>
          <img src={this.props.imageURL} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;