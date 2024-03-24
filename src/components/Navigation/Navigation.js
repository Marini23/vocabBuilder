import {
  Header,
  NavLinkLogoStyled,
  SvgLogo,
  TextLogo,
} from './Navigation.styled';
import Logo from '../../icons.svg';
import { UserBar } from 'components/UserBar/UserBar';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

export const Navigation = () => {
  return (
    <Header>
      <NavLinkLogoStyled to="/">
        <SvgLogo>
          <use xlinkHref={`${Logo}#icon-logo_small`} />
        </SvgLogo>
        <TextLogo>VocabBuilder</TextLogo>
      </NavLinkLogoStyled>
      <UserBar />
      <BurgerMenu />
    </Header>
  );
};
