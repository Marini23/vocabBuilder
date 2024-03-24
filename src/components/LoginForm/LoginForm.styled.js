import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  border-radius: 25px 25px 0 0;
  background-color: ${({ theme }) => theme.colors.backgroundAuth};
  padding: 32px 16px 60px 16px;
  @media screen and (min-width: 768px) {
    width: 628px;
    padding: 48px 64px;
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`;
export const Text = styled.p`
  line-height: 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 32px;
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  cursor: pointer;
  height: 56px;
  margin-top: 14px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding-left: 16px;
  line-height: 24px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
  &:hover,
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    margin-top: 18px;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  height: 56px;
  border-radius: 30px;
  border: none;
  margin-top: 32px;
  background-color: ${({ theme }) => theme.colors.greenMain};
  color: ${({ theme }) => theme.colors.textWhiteMain};
  font-weight: 700;
  line-height: 24px;

  &:hover {
    background-color: ${props => `${props.theme.colors.active}`};
  }
  &:focus {
    background-color: ${props => `${props.theme.colors.active}`};
  }
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: 18px;
    line-height: 28px;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc2f2f;
  font-size: 0.875rem;
`;

export const ButtonLink = styled.div`
  cursor: pointer;
  width: 100%;
  border: none;
  display: flex;
  justify-content: center;
  color: ${props => `${props.theme.colors.textLink}`};
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin-top: 12px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${props => `${props.theme.colors.textLink}`};
  &:visited {
    color: ${props => `${props.theme.colors.black}`};
  }
  &:hover {
    color: ${props => `${props.theme.colors.black}`};
  }
`;
