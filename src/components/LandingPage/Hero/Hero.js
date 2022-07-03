import React from 'react';
import { scrollToViewButton } from '../../../Utils/ScrollToView/scrollToViewButton';
import Button from '../../Shared/Button/Button';
import { HeroContainer } from './Hero.styled';

const Hero = ({ mixpanel }) => {
  return (
    <HeroContainer>
      <h1>Dinner subscriptions for your family</h1>
      <p>
        Mejamakan offers delicious and home-cooked “lauk” delivered to your home
        Mondays to Fridays
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
