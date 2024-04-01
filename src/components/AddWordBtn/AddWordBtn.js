import { AddWordForm } from 'components/AddWordForm/AddWordForm';
import { ModalWindow } from 'components/Modal/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const AddWordBtn = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <div>
        <button type="button" onClick={openModal}>
          Add word
        </button>
        <Link href="/vocabBuilder/training">Train oneself</Link>
      </div>
      <ModalWindow isClose={closeModal} isOpen={modalIsOpen}>
        <AddWordForm isClose={closeModal} />
      </ModalWindow>
    </>
  );
};
