import styled from 'styled-components';

export const FormFilter = styled.div`
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
  background-color: transparent;
`;

export const ButtonFilter = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  gap: 16px;
  border: none;
  margin-bottom: 20px;
`;

export const InputRadio = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  color: #85aa9f;
  width: 18px;
  height: 18px;
  border: 2px solid #85aa9f;
  border-radius: 50%;
  margin-right: 8px;
`;
