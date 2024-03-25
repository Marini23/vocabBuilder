import { UserBar } from 'components/UserBar/UserBar';
import {
  BurgerMenuContainer,
  CloseIcon,
  ImgMobile,
  ImgTablet,
  UserMenuContainer,
} from './BurgerMenu.styled';
import closeIcon from './close.svg';
import { UserNav } from 'components/UserNav/UserNav';
import { LogOutForm } from 'components/LogOut/LogOutForm';
import ill_burger_mobile from '../../images/ill_burger.svg';
import ill_burger_tablet from '../../images/burger_tablet.svg';

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
        <CloseIcon
          src={closeIcon}
          alt="close menu"
          width="32px"
          height="32px"
          onClick={onClick}
        />
      </UserMenuContainer>
      <UserNav />
      <LogOutForm />
      <ImgMobile src={ill_burger_mobile} alt="illustration" />
      <ImgTablet src={ill_burger_tablet} alt="illustration" />
    </BurgerMenuContainer>
  );
};
