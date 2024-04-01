import styled from 'styled-components';

export const FormFilter = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(121, 4, 17, 0.1);
  border-radius: 15px;
  padding: 12px 24px;
  margin-bottom: 8px;
  &:hover {
    border-color: black;
  }
  &:focus {
    border-color: black;
  }
`;

export const InputFilter = styled.input`
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  outline: none;
`;

export const ButtonFilter = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
