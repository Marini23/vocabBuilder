import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-top: 80px;
    margin-bottom: 28px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    margin-top: 28px;
    margin-bottom: 28px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
