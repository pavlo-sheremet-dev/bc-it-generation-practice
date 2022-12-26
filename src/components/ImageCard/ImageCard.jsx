import { CardItem } from './ImageCard.styled';
import { useState } from 'react';

export const ImageCard = ({ imageData }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  const closeModal = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };
  const { src, alt } = imageData;
  return (
    <>
      <CardItem>
        <img src={src} alt={alt} onClick={toggleModal} />
      </CardItem>
      {showModal && (
        <div
          onClick={closeModal}
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
};
