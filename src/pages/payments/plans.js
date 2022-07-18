import React from 'react';
import Plans from '../../components/Payments/Plans/Plans';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const plans = () => {
  const router = useRouter();
  return (
    <>
      <Plans />
    </>
  );
};

export default plans;
