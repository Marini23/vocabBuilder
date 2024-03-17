import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;
  margin-right: auto;
  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.black};

  &:visited {
    color: inherit;
  }
`;
