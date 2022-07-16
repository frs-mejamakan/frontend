import React from 'react';
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js';
import CardSection from './CardSection';
import Button from '../../../Shared/Button/Button';
import { CardWrapper } from '../../Payments.styled';
import { createPaymentIntent } from '../../Payments.service';
import { useRouter } from 'next/router';

const CheckoutForm = ({ session }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !session.accessToken) {
      return;
    }

    const { data } = await createPaymentIntent(
      session.accessToken,
      router.query
    );

    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: session.user.name,
        },
      },
    });

    if (result.error) {
      // Show error to your customer (for example, insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  return (
    <CardWrapper onSubmit={handleSubmit}>
      <h3>Make Payment </h3>
      <CardSection />
      <Button width='100%' disabled={!stripe}>
        Make Payment
      </Button>
    </CardWrapper>
  );
};

export default CheckoutForm;
