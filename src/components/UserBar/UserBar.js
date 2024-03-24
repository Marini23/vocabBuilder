import { useSelector } from 'react-redux';
import avatar from './avatar_user.svg';
import avatarMenu from './avatar_menu.svg';
import { selectUserName } from '../../redux/selectors';
import { AvatarIcon, Container, Name } from './UserBar.styled';

export const UserBar = ({
  fontSize,
  $lineheight,
  color,
  $backgroundcolor,
  $marginleft,
  isOpen,
}) => {
  const userName = useSelector(selectUserName);
  return (
    <Container $marginleft={$marginleft}>
      <Name fontSize={fontSize} $lineheight={$lineheight} color={color}>
        {userName}
      </Name>
      <AvatarIcon $backgroundcolor={$backgroundcolor}>
        {isOpen ? (
          <img src={avatarMenu} alt="avatar" />
        ) : (
          <img src={avatar} alt="avatar" />
        )}
      </AvatarIcon>
    </Container>
  );
};
