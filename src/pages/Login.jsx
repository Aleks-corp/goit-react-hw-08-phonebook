import { Container } from 'components/Container/Container';
import LoginForm from 'components/LoginRegisterForm/LoginForm';

export default function Login() {
  return (
    <Container title={'to your account'} accent={'Log in'}>
      <LoginForm />
    </Container>
  );
}
