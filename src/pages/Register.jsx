import { Container } from 'components/Container/Container';
import RegisterForm from 'components/LoginRegisterForm/RegisterForm';

export default function Register() {
  return (
    <Container title={'a new account'} accent={'Register'}>
      <RegisterForm />
    </Container>
  );
}
