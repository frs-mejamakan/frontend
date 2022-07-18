import React, { useState, useEffect } from 'react';
import {
  Calculator,
  PackageSelector,
  PlanGroup,
  PlanSelector,
  Price,
  Section,
  planSelector,
  PaymentsContainer,
} from '../Payments.styled';
import { priceCalculator } from '../../../utils/priceCalculator.utils';

import Button from '../../Shared/Button/Button';

import Slider from '@mui/material/Slider';

import withRice from '../../../../public/assets/Rice.svg';
import noRice from '../../../../public/assets/NoRice.svg';

import Image from 'next/image';

import { useRouter } from 'next/router';

import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { BottomBar } from '../../Shared/Layout/Layout';

const Plans = () => {
  const [familyMembers, setFamilyMembers] = useState(4);
  const [planSelected, setPlanSelected] = useState(20);
  const [packageSelected, setPackageSelected] = useState('A');
  const [pricing, setPricing] = useState({
    perPerson: 10,
    perPlan: 800,
  });
  const [rice, setRice] = useState('no rice');

  const router = useRouter();

  useEffect(() => {
    const priceOutput = priceCalculator(
      familyMembers,
      planSelected,
      packageSelected,
      rice
    );

    setPricing(priceOutput);
  }, [planSelected, packageSelected, familyMembers, rice]);

  const handleSliderChange = (e, newValue) => {
    setFamilyMembers(newValue);
  };

  const planSelector = (plan) => {
    setPlanSelected(plan);
  };

  const packageSelector = (pack) => {
    setPackageSelected(pack);
  };

  const riceHandler = (choice) => {
    setRice(choice);
  };

  let perVariable;

  if (planSelected === 5) perVariable = 'per week';
  if (planSelected === 10) perVariable = 'every 2 weeks';
  if (planSelected === 20) perVariable = 'per month';

  return (
    <PaymentsContainer>
      <span>
        <h1>Welcome to Mejamakan</h1>
        <p>Select a plan that's best for your family 👪</p>
      </span>
      <Calculator>
        <Section>
          <p>
            You have <span>{familyMembers}</span> family members
          </p>
          <Slider
            aria-label='Small steps'
            defaultValue={familyMembers}
            step={1}
            min={2}
            max={10}
            valueLabelDisplay='off'
            onChange={handleSliderChange}
          />
        </Section>
        <Section>
          <p>Select a plan</p>
          <PlanGroup style={{ marginTop: '0.7em' }}>
            <PlanSelector
              onClick={() => planSelector(5)}
              active={planSelected === 5}
            >
              <div></div>
              <h3>5 days</h3>
            </PlanSelector>
            <PlanSelector
              onClick={() => planSelector(10)}
              active={planSelected === 10}
            >
              <div></div>
              <h3>10 days</h3>
            </PlanSelector>
            <PlanSelector
              onClick={() => planSelector(20)}
              active={planSelected === 20}
            >
              <div></div>
              <h3>20 days</h3>
            </PlanSelector>
          </PlanGroup>
        </Section>
        <Section style={{ marginTop: '13px' }}>
          <p>Select a package</p>
          <PlanGroup style={{ marginTop: '0.5em' }}>
            <PackageSelector
              active={packageSelected === 'A'}
              onClick={() => packageSelector('A')}
            >
              <div>
                <h3>Protein</h3>
                <h3>1</h3>
              </div>
              <div>
                <h3>Vege</h3>
                <h3>1</h3>
              </div>
              <div>
                <h3>Sides</h3>
                <h3>1</h3>
              </div>
            </PackageSelector>
            <PackageSelector
              active={packageSelected === 'B'}
              onClick={() => packageSelector('B')}
            >
              <div>
                <h3>Protein</h3>
                <h3>2</h3>
              </div>
              <div>
                <h3>Vege</h3>
                <h3>1</h3>
              </div>
              <div>
                <h3>Sides</h3>
                <h3>1</h3>
              </div>
            </PackageSelector>
            <PackageSelector
              active={packageSelected === 'C'}
              onClick={() => packageSelector('C')}
            >
              <div>
                <h3>Protein</h3>
                <h3>2</h3>
              </div>
              <div>
                <h3>Vege</h3>
                <h3>2</h3>
              </div>
              <div>
                <h3>Sides</h3>
                <h3>1</h3>
              </div>
            </PackageSelector>
          </PlanGroup>
        </Section>
        <Section style={{ marginTop: '13px' }}>
          <p>Aromatic rice 🍚 </p>
          <PlanGroup style={{ marginTop: '0.5em' }}>
            <PackageSelector
              active={rice === 'no rice'}
              onClick={() => riceHandler('no rice')}
            >
              <Image src={noRice} height='85px' width='85px' />
            </PackageSelector>
            <PackageSelector
              active={rice === 'aromatic rice'}
              onClick={() => riceHandler('aromatic rice')}
            >
              <Image src={withRice} height='85px' width='85px' />
            </PackageSelector>
          </PlanGroup>
        </Section>
        <Section style={{ marginTop: '13px' }}>
          <p>You will pay</p>
          <Price>
            <h3>RM{pricing.perPerson} per person</h3>
            <h3 style={{ fontSize: '14px', color: '#969696' }}>
              RM{pricing.perPlan} {perVariable}
            </h3>
          </Price>
        </Section>
      </Calculator>
      <BottomBar>
        <Button
          space
          width='100%'
          color='googleColor'
          icon={<NavigateNextRoundedIcon />}
          onClick={() =>
            router.push({
              pathname: '/payments/checkout',
              query: {
                familyMembers,
                planSelected,
                packageSelected,
                rice,
                ...pricing,
              },
            })
          }
        >
          Delivery & Payments
        </Button>
      </BottomBar>
    </PaymentsContainer>
  );
};

export default Plans;
