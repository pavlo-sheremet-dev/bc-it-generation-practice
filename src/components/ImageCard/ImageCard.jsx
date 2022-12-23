import { Component } from 'react';
import { CardItem } from './ImageCard.styled';

export class ImageCard extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
  };

  closeModal = e => {
    if (e.target === e.currentTarget) {
      this.toggleModal();
    }
  };

  render() {
    const { showModal } = this.state;
    const {
      imageData: { src, alt },
    } = this.props;

    return (
      <>
        <CardItem>
          <img src={src} alt={alt} onClick={this.toggleModal} />
        </CardItem>
        {showModal && (
          <div
            onClick={this.closeModal}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0, 0.5)',
            }}
          >
            <img src={src} alt={alt} />
          </div>
        )}
      </>
    );
  }
}
