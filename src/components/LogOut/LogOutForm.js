import { useDispatch } from 'react-redux';
import arrowRight from '../../images/arrow-right.svg';
import { Button } from './LogOutForm.styled';
import { logOut } from '../../redux/authSlice/authOperations';

export const LogOutForm = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <Button type="button" onClick={handleClick}>
      <span> Lod Out</span>
      <img src={arrowRight} alt="arrow right" />
    </Button>
  );
};
