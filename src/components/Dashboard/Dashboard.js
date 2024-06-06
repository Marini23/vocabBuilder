import { AddWordBtn } from 'components/AddWordBtn/AddWordBtn';
import { Filters } from 'components/Filters/Filters';
import { Statictics } from 'components/Statisticts/Statictics';
import { Container, Wrapper } from './Dashboard.styled';

export const Dashboard = () => {
  return (
    <Wrapper>
      <Filters />
      <Container>
        <Statictics />
        <AddWordBtn />
      </Container>
    </Wrapper>
  );
};
