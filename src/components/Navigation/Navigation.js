import {
  Button,
  Header,
  NavLinkLogoStyled,
  SvgLogo,
  TextLogo,
} from './Navigation.styled';
import Logo from '../../icons.svg';
import { UserBar } from 'components/UserBar/UserBar';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';
import { UserNav } from 'components/UserNav/UserNav';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import arrowRight from '../../images/arrow-right.svg';
import { logOut } from '../../redux/authSlice/authOperations';
// import { Link } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isdesktopWindowSize, setIsDesktopWindowSize] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      // if (window.innerWidth <= 560) {
      //   setBurgerButtonSize({
      //     width: `30px`,
      //     height: `26px`,
      //   });
      // } else if (window.innerWidth <= 768) {
      //   setBurgerButtonSize({
      //     width: `36px`,
      //     height: `30px`,
      //   });
      // } else {
      //   setBurgerButtonSize({
      //     width: '46px',
      //     height: '40px',
      //   });
      // }
      if (window.innerWidth >= 1440) {
        setIsDesktopWindowSize(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClickLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Header>
      <NavLinkLogoStyled to="/">
        <SvgLogo>
          <use xlinkHref={`${Logo}#icon-logo_small`} />
        </SvgLogo>
        <TextLogo>VocabBuilder</TextLogo>
      </NavLinkLogoStyled>
      {isLoggedIn && isdesktopWindowSize && <UserNav />}
      {isLoggedIn && <UserBar />}
      {isLoggedIn && isdesktopWindowSize && (
        <Button type="button" onClick={handleClickLogOut}>
          <span> Lod Out</span>
          <img src={arrowRight} alt="arrow right" />
        </Button>
      )}
      {isLoggedIn && <BurgerMenu />}
    </Header>
  );
};
