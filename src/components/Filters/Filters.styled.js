import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
    margin-top: 80px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 8px;
    margin-top: 0;
  }
`;

export const FormFilter = styled.div`
  height: 48px;
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
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
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
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    align-items: center;
  }
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
