import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLink } from './Error404.styled';
import Loader from 'components/Loader';

export default function Error404() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate('/phonebook'), 3000);
  }, [navigate]);

  return (
    <>
      <StyledLink to="/phonebook">Redirecting to Home</StyledLink>
      <Loader />
    </>
  );
}
