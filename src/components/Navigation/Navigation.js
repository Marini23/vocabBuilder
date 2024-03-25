import {
  Header,
  NavLinkLogoStyled,
  SvgLogo,
  TextLogo,
} from './Navigation.styled';
import Logo from '../../icons.svg';
import { UserBar } from 'components/UserBar/UserBar';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/selectors';
// import { Link } from 'react-router-dom';

export const Navigation = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
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
      {/* {isLoggedIn && <Link to="/dictionary"></Link>} */}
    </Header>
  );
};
