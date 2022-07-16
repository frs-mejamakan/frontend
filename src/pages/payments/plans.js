import React from 'react';
import Plans from '../../components/Payments/Plans/Plans';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const plans = () => {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/auth/signin');
    },
  });
  return (
    <>
      <Plans session={session} />
    </>
  );
};

export default plans;
