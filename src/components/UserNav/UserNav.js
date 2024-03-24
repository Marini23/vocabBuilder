import { List, ListItem, NavLinkStyled, Wrapper } from './UserNav.styled';

export const UserNav = () => {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <NavLinkStyled to="/dictionary">Dictionary</NavLinkStyled>
        </ListItem>
        <ListItem>
          <NavLinkStyled to="/recommend">Recommend</NavLinkStyled>
        </ListItem>
        <ListItem>
          <NavLinkStyled to="/training">Training</NavLinkStyled>
        </ListItem>
      </List>
    </Wrapper>
  );
};
