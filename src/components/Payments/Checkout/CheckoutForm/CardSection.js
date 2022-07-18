import React from 'react';
import { CardElement, PaymentElement } from '@stripe/react-stripe-js';
import { CardInput } from '../../Payments.styled';
// import './CardSectionStyles.css';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Baloo Bhai',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#FF6B6B',
      iconColor: '#FF6B6B',
    },
  },
  hidePostalCode: true,
};

const CardSection = () => {
  return (
    <CardInput>
      <PaymentElement />
      {/* <CardElement options={CARD_ELEMENT_OPTIONS} /> */}
    </CardInput>
  );
};

export default CardSection;
