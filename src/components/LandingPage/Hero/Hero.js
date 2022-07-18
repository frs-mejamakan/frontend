import React from 'react';
import { Mixpanel } from '../../../mixpanel';
import { scrollToViewButton } from '../../../utils/ScrollToView/scrollToViewButton';
import Button from '../../Shared/Button/Button';
import { HeroContainer } from './Hero.styles';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Banner from '../../../../public/assets/Hero.webp';
import Link from 'next/link';

const Hero = ({ session }) => {
  let hero = 'Lauk delivery starting from RM10 per person';
  let desc =
    'We prepare, cook and deliver delicious Malaysian lauk Mondays to Fridays';
  let cta = 'GET YOUR FIRST MEAL FREE';
  let ctaLink = '/payments/plans';

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
        <Link
          href={ctaLink}
          onClick={() => {
            Mixpanel.track('CTA Button Clicked', { section: 'Hero' });
          }}
        >
          <Button>{cta}</Button>
        </Link>
      </HeroContainer>
    </>
  );
};

export default Hero;
