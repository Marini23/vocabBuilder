import styled from 'styled-components';

export const ErrorMessage = styled.div`
  color: #dc2f2f;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: #85aa9f;
`;

export const Title = styled.h3`
  display: flex;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.textWhiteMain};
  margin-bottom: 16px;
`;

export const Text = styled.p`
  display: flex;
  line-height: 24px;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textWhiteMain};
  margin-bottom: 16px;
`;

export const Img = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 15px;
`;

export const Input = styled.input`
  width: 100%;
  cursor: pointer;
  height: 48px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.textWhiteMain};
  background-color: transparent;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.textWhiteMain};
  margin-bottom: 16px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textWhiteMain};
  }
  &:hover,
  &:focus {
    outline: none;
    border: 3px solid #d1d5db;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`;

export const AddBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 159px;
  height: 48px;
  border-radius: 30px;
  border: none;
  background-color: ${({ theme }) => theme.colors.textWhiteMain};
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  &:hover {
    color: ${({ theme }) => theme.colors.greenMain};
  }
`;

export const CancelBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 145px;
  height: 48px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.borderWhite};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textWhiteMain};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  &:hover {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.textWhiteMain};
  }
`;

export const FlagContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  align-items: center;
  vertical-align: baseline;
`;

export const TextFlag = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 19.32px;
  color: ${({ theme }) => theme.colors.textWhiteMain};
`;

export const Fieldset = styled.fieldset`
  display: flex;
  gap: 16px;
  border: none;
  margin-bottom: 20px;
`;

export const InputRadio = styled.input`
  -webkit-appearance: none;
  appearance: none;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.56px;
  color: ${({ theme }) => theme.colors.textWhiteMain};
  margin-left: 8px;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
`;
