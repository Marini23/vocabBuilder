import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 32px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  vertical-align: baseline;
  gap: 8px;
`;
export const ButtonText = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonLink = styled.a`
  cursor: pointer;
  display: flex;
  vertical-align: baseline;
  gap: 8px;
  text-decoration: none;
  color: ${props => `${props.theme.colors.black}`};
  &:visited {
    color: ${props => `${props.theme.colors.black}`};
  }
  &:hover {
    color: ${props => `${props.theme.colors.black}`};
  }
`;

export const LinkText = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
`;
