import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 238px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 10px; */
  /* margin-right: auto; */
  /* @media screen and (max-width: 1120px) {
    display: none;
  } */
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
`;

export const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: start;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.32px;
  &:hover {
    padding: 12px 20px;
    background-color: ${({ theme }) => theme.colors.textWhiteMain};
    border-radius: 15px;
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
  }
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.black};
  }
`;
