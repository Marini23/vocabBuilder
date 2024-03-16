import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container, Info, Picture } from './RegisterPage.styled';
import ill_mobile from '../../images/illustration_mobile.jpg';
import ill_mobile_2x from '../../images/illustration_mobile_2x.jpg';
import ill_mobile_3x from '../../images/illustration_mobile_3x.jpg';
import ill_mobile_4x from '../../images/illustration_mobile_4x.jpg';

export default function RegisterPage() {
  return (
    <Container>
      <Picture>
        <source
          srcSet={`${ill_mobile_2x} 2x, ${ill_mobile_3x} 3x, ${ill_mobile_4x} 4x`}
          media="(max-width: 767px)"
        />
        <img src={ill_mobile} alt="illustration" />
      </Picture>
      <RegisterForm />
      <Info>Word · Translation · Grammar · Progress</Info>
    </Container>
  );
}
