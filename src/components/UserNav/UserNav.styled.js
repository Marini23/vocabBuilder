import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 238px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    margin-top: 0;
    margin: 0 auto;
  }
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  justify-content: start;
  gap: 28px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: start;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.32px;
  padding: 12px 0;

  &:hover {
    padding: 12px 20px;
    background-color: ${({ theme }) => theme.colors.textWhiteMain};
    border-radius: 15px;
    @media screen and (min-width: 1440px) {
      background-color: ${({ theme }) => theme.colors.greenMain};
    }
  }

  &:focus {
    outline: none; /* Remove default focus outline */
    box-shadow: none; /* Add your desired focus effect */
    padding: 12px 20px;
    background-color: ${({ theme }) => theme.colors.textWhiteMain};
    border-radius: 15px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textWhiteMain};

  &:visited {
    color: ${({ theme }) => theme.colors.textWhiteMain};
    @media screen and (min-width: 1440px) {
      color: ${({ theme }) => theme.colors.black};
    }
  }
  &:hover {
    color: ${({ theme }) => theme.colors.black};
    @media screen and (min-width: 1440px) {
      color: ${({ theme }) => theme.colors.textWhiteMain};
    }
  }

  &:focus {
    color: ${({ theme }) => theme.colors.black};
  }
  @media screen and (min-width: 1440px) {
    color: ${({ theme }) => theme.colors.textWhiteMain};
  }
`;
