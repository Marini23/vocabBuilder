import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkLogoStyled = styled(NavLink)`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  text-decoration: none;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.black};
  &:visited {
    color: inherit;
  }
`;
export const SvgLogo = styled.svg`
  width: 32px;
  height: 32px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const TextLogo = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  vertical-align: baseline;
  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 32px;
  }
`;
