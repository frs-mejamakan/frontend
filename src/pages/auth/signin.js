import { getProviders, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Auth from '../../components/Auth/Auth';
import { Container } from '../../components/Shared/Layout/Layout';
import NavBar from '../../components/Shared/Navbar/Navbar';

const signin = ({ providers }) => {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    router.push(router.query.callbackUrl);
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
