import React, { useState } from 'react';
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js';
import CardSection from './CardSection';
import Button from '../../../Shared/Button/Button';
import {
  CardWrapper,
  DuoGrid,
  PlanGroup,
  PlanGroupWrap,
  PlanSelector,
  PlanSummary,
  Section,
  SecureText,
} from '../../Payments.styled';
import { createPaymentIntent } from '../../Payments.service';
import { useRouter } from 'next/router';
import VpnLockRoundedIcon from '@mui/icons-material/VpnLockRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import { priceCalculator } from '../../../../utils/priceCalculator.utils';
const CheckoutForm = ({ session }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [configuration, setConfiguration] = useState({
    ...router.query,
    planSelected: parseInt(router.query.planSelected),
  });

  const planSelector = (plan) => {
    const priceOutput = priceCalculator(
      parseInt(configuration.familyMembers),
      plan,
      configuration.packageSelected,
      configuration.rice
    );

    setConfiguration({
      ...configuration,
      perPerson: priceOutput.perPerson,
      perPlan: priceOutput.perPlan,
      planSelected: plan,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !session.accessToken) {
      return;
    }

    const { data } = await createPaymentIntent(
      session.accessToken,
      configuration
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
        alert('paid');
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  let perVariable;

  if (configuration.planSelected === 5) perVariable = 'every week';
  if (configuration.planSelected === 10) perVariable = 'every 2 weeks';
  if (configuration.planSelected === 20) perVariable = 'every month';

  return (
    <CardWrapper onSubmit={handleSubmit}>
      <h3>Make Payment</h3>
      <PlanSummary>
        <Section>
          <p>Plan</p>
          <PlanGroupWrap style={{ marginTop: '0.7em' }}>
            <PlanSelector
              active={configuration.planSelected === 5}
              onClick={() => planSelector(5)}
            >
              <div></div>
              <h3>5 days </h3>
            </PlanSelector>
            <PlanSelector
              active={configuration.planSelected === 10}
              onClick={() => planSelector(10)}
            >
              <div></div>
              <h3>
                10 days <span style={{ color: '#3bcd92' }}>{'(Save 10%)'}</span>
              </h3>
            </PlanSelector>
            <PlanSelector
              active={configuration.planSelected === 20}
              onClick={() => planSelector(20)}
            >
              <div></div>
              <h3>
                20 days{' '}
                <span style={{ color: '#3bcd92' }}> {'(Save 20%)'}</span>
              </h3>
            </PlanSelector>
          </PlanGroupWrap>
        </Section>
        <DuoGrid>
          <Section>
            <p>Delivery</p>
            <h3>Free</h3>
          </Section>
          <Section>
            <p>Total</p>
            <h3 style={{ marginBottom: '-7px', fontSize: '18px' }}>
              RM{configuration.perPlan}
            </h3>
          </Section>
        </DuoGrid>
      </PlanSummary>
      <p>
        <em>
          You will be billed RM{configuration.perPlan} {perVariable}
        </em>
      </p>
      <CardSection />
      <Button width='100%' color='googleColor' disabled={!stripe}>
        Make Payment
      </Button>
      <SecureText>
        <VpnLockRoundedIcon />
        <p>Your transaction is secured with SSL encryption</p>
      </SecureText>
    </CardWrapper>
  );
};

export default CheckoutForm;
