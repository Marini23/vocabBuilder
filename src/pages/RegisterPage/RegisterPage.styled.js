import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  margin: 0 auto;
  margin-top: 64px;
  @media screen and (min-width: 768px) {
    margin-top: 204px;
  }
`;

export const Picture = styled.picture`
  display: flex;
  width: 247px;
  height: 191px;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Info = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: 98px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.textSecondary};
    word-spacing: 5px;
  }
`;
