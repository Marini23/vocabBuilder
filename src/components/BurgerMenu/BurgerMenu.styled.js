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
  @media screen and (min-width: 768px) {
    width: 300px;
    padding: 32px;
  }
`;

export const UserMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ImgMobile = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ImgTablet = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

export const CloseIcon = styled.img`
  width: 32px;
  height: 32px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const BurgerIcon = styled.img`
  width: 32px;
  height: 28px;
  @media screen and (min-width: 768px) {
    width: 40px;
  }
`;
