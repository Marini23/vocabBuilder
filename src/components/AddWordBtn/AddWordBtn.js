import { AddWordForm } from 'components/AddWordForm/AddWordForm';
import { ModalWindow } from 'components/Modal/Modal';
import { useState } from 'react';
import arrowRight from '../../images/arrow_right_green.svg';
import plusIcon from '../../images/plus.svg';
import {
  Button,
  ButtonLink,
  ButtonText,
  Container,
  LinkText,
} from './AddWordBtn.styled';

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
      <Container>
        <Button type="button" onClick={openModal}>
          <ButtonText>Add word</ButtonText>
          <img src={plusIcon} alt="arrow right" />
        </Button>
        <ButtonLink href="/vocabBuilder/training">
          <LinkText>Train oneself</LinkText>
          <img src={arrowRight} alt="arrow right" />
        </ButtonLink>
      </Container>
      <ModalWindow isClose={closeModal} isOpen={modalIsOpen}>
        <AddWordForm isClose={closeModal} />
      </ModalWindow>
    </>
  );
};
