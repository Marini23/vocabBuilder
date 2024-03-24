import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  margin-left: ${props => props.$marginleft || 'auto'};
`;

export const Name = styled.p`
  font-size: ${props =>
    props.fontSize || '20px'}; /* Default to 20px if no prop is provided */
  font-weight: 500;
  line-height: ${props =>
    props.$lineheight ||
    '27.6px'}; /* Default to 27.6px if no prop is provided */
  color: ${props =>
    props.color || 'black'}; /* Default to black if no prop is provided */
`;

export const AvatarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: ${props => props.$backgroundcolor || '#85AA9F'};
  border-radius: 30px;
`;
