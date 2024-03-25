import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textWhiteMain};
  font-size: 14px;
  font-weight: 500;
  line-height: 19.32px;
  margin-top: 28px;
  display: flex;
  gap: 6px;
  align-items: center;
  vertical-align: baseline;
`;
