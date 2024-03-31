import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  font-size: 14px;
  font-weight: 500;
  min-width: 343px;
  border: none;
`;

export const Thead = styled.thead`
  background-color: rgba(133, 170, 159, 0.1);
`;

export const Th = styled.th`
  border-right: 1px solid #dbdbdb;
  font-size: 16px;
  font-weight: 500;
  line-height: 22.08px;
  padding: 16px 14px;
  text-align: start;
  &:last-child {
    border-right: none;
  }
`;

export const Td = styled.td`
  padding: 16px 14px;
  border-bottom: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  &:last-child {
    border-right: none;
  }
`;
