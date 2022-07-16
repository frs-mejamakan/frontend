import React from 'react';
import { Mixpanel } from '../../../mixpanel';
import { scrollToViewButton } from '../../../utils/ScrollToView/scrollToViewButton';
import Button from '../../Shared/Button/Button';
import { HeroContainer } from './Hero.styles';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Banner from '../../../../public/assets/Hero.webp';

const Hero = ({ session }) => {
  const router = useRouter();

  let hero = 'Lauk delivery starting from RM10 per person';
  let desc =
    'We prepare, cook and deliver delicious Malaysian lauk Mondays to Fridays';
  let cta = 'GET YOUR FIRST MEAL FREE';

  if (session && !session.user.subscribed) {
    hero = 'Cooking and deciding what to eat is hard';
    desc = 'Spend more time with your family and let us worry about dinner';
    cta = 'CREATE MY DINNER PLAN';
  }

  return (
    <>
      <Image src={Banner} height='450px' objectFit='cover' />
      <HeroContainer>
        <h1>{hero}</h1>
        <p>{desc}</p>
        <Button
          onClick={() => {
            Mixpanel.track('CTA Button Clicked', { section: 'Hero' });
            if (!session) router.push('/auth/signin');
            if (session && !session.user.subscribed)
              router.push('/payments/plans');
          }}
        >
          {cta}
        </Button>
      </HeroContainer>
    </>
  );
};

export default Hero;
