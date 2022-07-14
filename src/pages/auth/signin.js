import { getProviders, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Auth from '../../components/Auth/Auth';
import { Container } from '../../components/Shared/Layout/Layout';
import NavBar from '../../components/Shared/Navbar/Navbar';

const signin = ({ providers }) => {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'authenticated') {
    router.push('/');
  }

  return (
    <Container>
      <NavBar />
      <Auth providers={providers} />
    </Container>
  );
};

export default signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
