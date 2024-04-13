import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './DictionaryPage.styled';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { categoriesWords } from '../../redux/wordsSlice/wordsOperations';

export const DictionaryPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoriesWords());
  }, [dispatch]);
  return (
    <Container>
      <Dashboard />
    </Container>
  );
};
