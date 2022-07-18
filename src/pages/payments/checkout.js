import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Checkout from '../../components/Payments/Checkout/Checkout';

const checkout = () => {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
  });
  return <Checkout session={session} />;
};

export default checkout;
