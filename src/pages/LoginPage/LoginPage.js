import {
  Container,
  Info,
  InfoMobile,
  PictureDesktop,
  PictureMobile,
  WrapperImage,
} from './LoginPage.styled';
import ill_mobile from '../../images/illustration_mobile.jpg';
import ill_mobile_2x from '../../images/illustration_mobile_2x.jpg';
import ill_mobile_3x from '../../images/illustration_mobile_3x.jpg';
import ill_mobile_4x from '../../images/illustration_mobile_4x.jpg';
import ill_desktop from '../../images/illustration_desktop.jpg';
import ill_desktop_2x from '../../images/illustration_desktop_2x.jpg';
import ill_desktop_3x from '../../images/illustration_desktop_3x.jpg';
import ill_desktop_4x from '../../images/illustration_desktop_4x.jpg';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <Container>
      <PictureMobile>
        <source
          srcSet={`${ill_mobile_2x} 2x, ${ill_mobile_3x} 3x, ${ill_mobile_4x} 4x`}
          media="(max-width: 767px)"
        />
        <img src={ill_mobile} alt="illustration" />
      </PictureMobile>
      <InfoMobile>Word · Translation · Grammar · Progress</InfoMobile>
      <LoginForm />
      <WrapperImage>
        <PictureDesktop>
          <source
            srcSet={`${ill_desktop_2x} 2x, ${ill_desktop_3x} 3x, ${ill_desktop_4x} 4x`}
            media="(min-width: 768px)"
          />
          <img src={ill_desktop} alt="illustration" />
        </PictureDesktop>
        <Info>Word · Translation · Grammar · Progress</Info>
      </WrapperImage>
    </Container>
  );
}
