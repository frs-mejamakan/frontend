import React from 'react';
import { Mixpanel } from '../../../mixpanel';
import { scrollToViewButton } from '../../../utils/ScrollToView/scrollToViewButton';
import Button from '../../Shared/Button/Button';
import { HeroContainer } from './Hero.styles';

const Hero = ({}) => {
  return (
    <HeroContainer>
      <h1>Lauk delivery starting from RM10 per person</h1>
      <p>
        We prepare, cook and deliver delicious Malaysian lauk Mondays to Fridays
      </p>
      <Button
        onClick={() => {
          Mixpanel.track('CTA Button Clicked', { section: 'Hero' });
          scrollToViewButton('pricing');
        }}
      >
        GET YOUR FIRST MEAL FREE
      </Button>
    </HeroContainer>
  );
};

export default Hero;
