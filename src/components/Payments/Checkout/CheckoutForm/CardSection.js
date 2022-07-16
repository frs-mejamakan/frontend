import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
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
  return <CardElement options={CARD_ELEMENT_OPTIONS} />;
};

export default CardSection;
