import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { staticticsWords } from '../../redux/wordsSlice/wordsOperations';
import { selectTotalCount } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { Text, TextSpan } from './Statistics.styled';

export const Statictics = () => {
  const dispatch = useDispatch();
  const totalCount = useSelector(selectTotalCount);
  useEffect(() => {
    dispatch(staticticsWords());
  }, [dispatch]);

  return (
    <Text>
      To study:<TextSpan>{totalCount}</TextSpan>
    </Text>
  );
};
