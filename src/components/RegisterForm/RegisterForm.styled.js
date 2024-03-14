import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 25px 25px 0 0;
  background-color: ${({ theme }) => theme.colors.backgroundAuth};
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 32px;
`;
export const Text = styled.p`
  line-height: 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const PasswordContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  cursor: pointer;
  height: 52px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-left: 16px;
  line-height: 1.25;
  ::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
  &:hover,
  &:focus {
    outline: none;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  height: 52px;
  border-radius: 30px;
  border: none;
  margin-top: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundCard};
  font-weight: 500;
  line-height: 1.25;
  &:hover {
    background-color: ${props => `${props.theme.colors.active}`};
  }
  &:focus {
    background-color: ${props => `${props.theme.colors.active}`};
  }
`;

export const ErrorMessage = styled.div`
  color: #dc2f2f;
  font-size: 0.875rem;
`;
