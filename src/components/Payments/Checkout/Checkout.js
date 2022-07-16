import React from 'react';
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

const Checkout = ({ session }) => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  return (
    <PaymentsContainer>
      <span>
        <h1>Just a few more steps 🚚 </h1>
        <p>Tell us where to send it and make your payment</p>
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
            <TextField
              label='Postcode'
              name='postcode'
              type='text'
              placeholder='So we know where to send it to'
            />
          </AddressFlex>
        </FormContainer>
      </AddressContainer>
      <Elements stripe={stripePromise}>
        <CheckoutForm session={session} />
      </Elements>
    </PaymentsContainer>
  );
};

export default Checkout;
