import { UserBar } from 'components/UserBar/UserBar';
import { BurgerMenuContainer, UserMenuContainer } from './BurgerMenu.styled';
import closeIcon from './close.svg';
import { UserNav } from 'components/UserNav/UserNav';

export const NavMenu = ({ isOpen, onClick }) => {
  return (
    <BurgerMenuContainer>
      <UserMenuContainer>
        <UserBar
          fontSize="16px lingh"
          $lineheight="22.08px"
          color="#FCFCFC"
          $backgroundcolor="#FCFCFC"
          $marginleft="0"
          isOpen={isOpen}
        />
        <img
          src={closeIcon}
          alt="close menu"
          width="32px"
          height="32px"
          onClick={onClick}
        />
      </UserMenuContainer>
      <UserNav />
    </BurgerMenuContainer>
  );
};
