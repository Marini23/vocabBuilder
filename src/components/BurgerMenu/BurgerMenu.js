import { useState } from 'react';
import { BurgerIcon, Button } from './BurgerMenu.styled';
import burgerIcon from './burger_icon.svg';
import { NavMenu } from './NavMenu';

export const BurgerMenu = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerIsOpen(!burgerIsOpen);
  };
  return (
    <>
      <Button type="button" onClick={toggleBurger}>
        <BurgerIcon src={burgerIcon} alt="burger menu" />
      </Button>
      {burgerIsOpen ? (
        <NavMenu isOpen={burgerIsOpen} onClick={toggleBurger} />
      ) : null}
    </>
  );
};
