import styled from 'styled-components';

export const Text = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.32px;
  color: ${({ theme }) => theme.colors.textLink};
  margin-bottom: 28px;
  margin-top: 40px;
`;

export const TextSpan = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 27.6px;
  color: ${({ theme }) => theme.colors.black};
  margin-left: 8px;
`;
