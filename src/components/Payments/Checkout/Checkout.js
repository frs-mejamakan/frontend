import React, { useEffect, useState } from 'react';
import {
  AddressContainer,
  AddressFlex,
  CardWrapper,
  FormContainer,
  PaymentsContainer,
} from '../Payments.styled';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { TextField } from '@mui/material';
import { createPaymentIntent } from '../Payments.service';

const Checkout = ({ session }) => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const getSecretClient = async () => {
      const { data } = await createPaymentIntent(session?.accessToken, {
        perPlan: 800,
      });

      setClientSecret(data.clientSecret);
    };

    if (session) getSecretClient();
  }, [session]);

  const appearance = {
    variables: {
      colorPrimary: '#4285f4',
      colorBackground: '#ffffff',
      colorText: '#30313d',
      colorDanger: '#df1b41',
      fontFamily: 'Baloo Bhai',
      borderRadius: '15px',
      // See all possible variables below
    },
  };
  const options = {
    clientSecret,
    appearance,
  };
  console.log(options);

  return (
    <PaymentsContainer>
      <span>
        <h1>Hello, {session?.user.name} 👋</h1>
        <p>Tell us where to deliver and we are on our way</p>
      </span>
      <AddressContainer>
        <h3>Delivery Address </h3>
        <FormContainer>
          <TextField
            label='Phone'
            type='email'
            name='email'
            placeholder='We will send your voucher here'
          />
          <TextField
            label='Street'
            name='street'
            type='text'
            placeholder='So we know where to send it to'
          />
          <AddressFlex>
            <TextField
              label='City'
              name='city'
              type='text'
              placeholder='So we know where to send it to'
            />
            <TextField
              label='State'
              name='state'
              type='text'
              placeholder='So we know where to send it to'
            />
          </AddressFlex>
          <TextField
            label='Postcode'
            name='postcode'
            type='text'
            placeholder='So we know where to send it to'
          />
        </FormContainer>
      </AddressContainer>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm session={session} />
        </Elements>
      )}
    </PaymentsContainer>
  );
};

export default Checkout;
