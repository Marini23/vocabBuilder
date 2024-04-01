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
  margin-bottom: 8px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textWhiteMain};
  }
  &:hover,
  &:focus {
    outline: none;
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
