import Modal from 'react-modal';
import './Modal.css';
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect } from 'react';
Modal.setAppElement('#modal-root');

export const ModalWindow = ({ isOpen, isClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      ariaHideApp={false}
      overlayClassName={'modal-overlay'}
      className={'modal-content'}
    >
      <IoCloseOutline
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
        }}
        size="32px"
        color="#FCFCFC"
        onClick={isClose}
      />
      {children}
    </Modal>
  );
};
