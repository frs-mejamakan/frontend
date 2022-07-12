import { getProviders, signIn, signOut, useSession } from 'next-auth/react';

const signin = ({ providers }) => {
  const { data: session, status } = useSession();

  console.log(session);

  return (
    <>
      <p>{session?.user?.email}</p>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
      {session && <button onClick={() => signOut()}>Sign Out</button>}
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
