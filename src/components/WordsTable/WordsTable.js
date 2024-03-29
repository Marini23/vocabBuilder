// import { useReactTable } from '@tanstack/react-table';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken, selectUserId } from '../../redux/selectors';
import { fetchUserWords } from '../../redux/wordsSlice/wordsOperations';

export const WordsTable = () => {
  const dispatch = useDispatch();
  const own = useSelector(selectUserId);
  const token = useSelector(selectToken);
  useEffect(() => {
    dispatch(fetchUserWords(own, token));
  }, [dispatch, own, token]);
  //   const table = useReactTable(options);

  // ...render your table
};
