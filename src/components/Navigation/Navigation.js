import { NavLinkLogoStyled, SvgLogo, TextLogo } from './Navigation.styled';
import Logo from '../../icons.svg';

export const Navigation = () => {
  return (
    <div>
      <NavLinkLogoStyled to="/">
        <SvgLogo>
          <use xlinkHref={`${Logo}#icon-logo_small`} />
        </SvgLogo>
        <TextLogo>VocabBuilder</TextLogo>
      </NavLinkLogoStyled>
    </div>
  );
};
