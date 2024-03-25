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
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 80px;
  }
`;

export const PictureMobile = styled.picture`
  display: flex;
  width: 247px;
  height: 191px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const PictureDesktop = styled.picture`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    width: 498px;
    height: 495px;
    justify-content: center;
    align-items: center;
  }
`;

export const WrapperImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;

export const InfoMobile = styled.p`
  display: flex;
  font-size: 14px;
  line-height: 19.32px;
  margin-top: 12px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.colors.textSecondary};
  word-spacing: 5px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Info = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.textSecondary};
    word-spacing: 5px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 16px;
  }
`;
