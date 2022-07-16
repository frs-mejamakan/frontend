import { getProviders, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Auth from '../../components/Auth/Auth';
import { Container } from '../../components/Shared/Layout/Layout';
import NavBar from '../../components/Shared/Navbar/Navbar';

const signin = ({ providers }) => {
  const { status, data: session } = useSession();
  const router = useRouter();

  if (session && !session.user.subscribed) {
    router.push('/payments/plans');
  }

  return (
    <>
      <Auth providers={providers} />
    </>
  );
};

export default signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
