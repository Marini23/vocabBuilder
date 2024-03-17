import {} from './Navigation.styled';
import { NavLinkStyled, Wrapper } from './UserNav.styled';

export const UserNav = () => {
  return (
    <Wrapper>
      <NavLinkStyled to="/dictionary">Home</NavLinkStyled>
      <NavLinkStyled to="/recommend">Psychologists</NavLinkStyled>
      <NavLinkStyled to="/training">Psychologists</NavLinkStyled>
    </Wrapper>
  );
};
