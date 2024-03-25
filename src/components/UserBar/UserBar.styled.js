import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  margin-left: ${props => props.$marginleft || 'auto'};
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const Name = styled.p`
  font-size: ${props => props.fontSize || '20px'};
  font-weight: 500;
  line-height: ${props => props.$lineheight || '27.6px'};
  color: ${props => props.color || 'black'};
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 27.6px;
  }
`;

export const AvatarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: ${props => props.$backgroundcolor || '#85AA9F'};
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
