import React, { useState, useEffect, forwardRef } from 'react';
import {
  Calculator,
  PackageSelector,
  PlanGroup,
  PlansContainer,
  PlanSelector,
  Price,
  Section,
} from './Plans.styled';
import Slider from '@mui/material/Slider';
import Button from '../../Shared/Button/Button';
import { priceCalculator } from '../../../Utils/priceCalculator.utils';
import ClaimModal from './ClaimModal/ClaimModal';
import { Mixpanel } from '../../../mixpanel';

const Plans = forwardRef(({}, { ref }) => {
  const [familyMembers, setFamilyMembers] = useState(4);
  const [planSelected, setPlanSelected] = useState(20);
  const [packageSelected, setPackageSelected] = useState('A');
  const [pricing, setPricing] = useState({
    perPerson: 10,
    perPlan: 800,
  });
  const [modalState, setModalState] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    postcode: '',
  });

  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const modalOpen = () => {
    setModalState(true);
  };

  const modalClose = () => {
    setModalState(false);
  };

  useEffect(() => {
    const priceOutput = priceCalculator(
      familyMembers,
      planSelected,
      packageSelected
    );

    setPricing(priceOutput);
  }, [planSelected, packageSelected, familyMembers]);

  const handleSliderChange = (e, newValue) => {
    setFamilyMembers(newValue);
  };

  let perVariable;

  if (planSelected === 5) perVariable = 'per week';
  if (planSelected === 10) perVariable = 'every 2 weeks';
  if (planSelected === 20) perVariable = 'per month';
  return (
    <PlansContainer ref={ref} id='pricing'>
      <h1>Plans</h1>
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
              onClick={() => setPlanSelected(5)}
              active={planSelected === 5}
            >
              <div></div>
              <h3>5 days</h3>
            </PlanSelector>
            <PlanSelector
              onClick={() => setPlanSelected(10)}
              active={planSelected === 10}
            >
              <div></div>
              <h3>10 days</h3>
            </PlanSelector>
            <PlanSelector
              onClick={() => setPlanSelected(20)}
              active={planSelected === 20}
            >
              <div></div>
              <h3>20 days</h3>
            </PlanSelector>
          </PlanGroup>
        </Section>
        <Section style={{ marginTop: '13px' }}>
          <p>Select a package</p>
          <PlanGroup style={{ marginTop: '0.7em' }}>
            <PackageSelector
              active={packageSelected === 'A'}
              onClick={() => setPackageSelected('A')}
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
              onClick={() => setPackageSelected('B')}
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
              onClick={() => setPackageSelected('C')}
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
          <p>You would pay</p>
          <Price>
            <h3>RM{pricing.perPerson} per person</h3>
            <p>
              RM{pricing.perPlan} {perVariable}
            </p>
          </Price>
        </Section>
        <Button
          color='red'
          width='100%'
          onClick={() => {
            Mixpanel.track('CTA Button Clicked', { section: 'Plans' });
            modalOpen();
          }}
        >
          CLAIM YOUR FREE MEALS
        </Button>
      </Calculator>
      <ClaimModal
        modalState={modalState}
        modalClose={modalClose}
        familyMembers={familyMembers}
        planSelected={planSelected}
        packageSelected={packageSelected}
        formData={formData}
        formHandler={formHandler}
        pricing={pricing}
      />
    </PlansContainer>
  );
});

export default Plans;
