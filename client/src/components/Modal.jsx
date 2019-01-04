import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  el = document.createElement('div');

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    const { onClose, modalImage, photos, currentModalIndex, onNext, onPrevious } = this.props;

    return ReactDOM.createPortal(
      <div id="carousel-modal-bg">

        <button onClick={onClose} id="close-btn">Close</button>
        <button onClick={onPrevious} id="prev-Btn"><span>&#60;</span></button>
        <button onClick={onNext} id="next-Btn"><span>&#62;</span></button>
        <div id="carousel-modal-style">
          {photos.map((restaurants) => {
            const currentModal = restaurants.userPhotos.filter((restaurant, idx) => { return idx === currentModalIndex });
            const parsedDate = currentModal[0].date.split(' ').slice(0, 4).join(' ');
            return (
              <div>
                <div id="carousel-modal"><img src={currentModal[0].photoURL}></img></div>
                <div id="carousel-description">{currentModal[0].photo_description}</div>
                <div id="carousel-date">{parsedDate}</div>
                <div id="carousel-user">{currentModal[0].username}</div>
              </div>
            )
          })}
        </div>
      </div >,
      this.el
    )
  }
}

export default Modal;