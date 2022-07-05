import React from 'react';
import { scrollToViewButton } from '../../../Utils/ScrollToView/scrollToViewButton';
import Button from '../../Shared/Button/Button';
import { HeroContainer } from './Hero.styles';

const Hero = ({ mixpanel }) => {
  return (
    <HeroContainer>
      <h1>Lauk delivery starting from RM10 per person</h1>
      <p>
        We prepare, cook and deliver delicious Malaysian lauk Mondays to Fridays
      </p>
      <Button
        onClick={() => {
          mixpanel.track('CTA Button Clicked', { section: 'Hero' });
          scrollToViewButton('pricing');
        }}
      >
        CLAIM YOUR FREE MEALS
      </Button>
    </HeroContainer>
  );
};

export default Hero;
