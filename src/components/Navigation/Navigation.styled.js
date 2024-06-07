import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1440px;
  min-width: 320px;
  height: 68px;
  margin: 0 auto;
  padding: 16px;
  z-index: 1;
`;

export const NavLinkLogoStyled = styled(NavLink)`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
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

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 500;
  line-height: 19.32px;
  margin-top: 28px;
  display: flex;
  gap: 6px;
  align-items: center;
  vertical-align: baseline;
`;
