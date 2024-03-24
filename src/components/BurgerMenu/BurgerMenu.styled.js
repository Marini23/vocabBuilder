import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  width: 32px;
  height: 22px;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: end;
  align-items: flex-end;
  margin-left: 8px;
`;

export const BurgerMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 185px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.greenMain};
  transition: all 0, 5s ease 0s;
  padding: 16px;
`;

export const UserMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
