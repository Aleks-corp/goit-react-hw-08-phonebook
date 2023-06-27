import { Container } from 'components/Container/Container';
import Error404 from 'components/Error404/Error404';

export default function ErrorPage() {
  return (
    <Container title={'Page Not Found'}>
      <Error404 />
    </Container>
  );
}
