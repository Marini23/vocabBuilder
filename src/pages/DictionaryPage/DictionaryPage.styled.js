import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 80px;
  padding: 0 20px;
  width: 100%;
  max-width: 375px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
