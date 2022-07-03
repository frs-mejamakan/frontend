import React from 'react';
import { scrollToViewButton } from '../../../Utils/ScrollToView/scrollToViewButton';
import Button from '../../Shared/Button/Button';
import { HowContainer, HowList, Indicator, ListItem } from './How.styled';

const How = ({ mixpanel }) => {
  return (
    <HowContainer>
      <h1>How it works</h1>
      <HowList>
        <ListItem>
          <Indicator>
            <h3>1</h3>
          </Indicator>
          <p>
            The first step is to select a plan. We have plans suitable for every
            family no matter the size or how much you eat!{' '}
          </p>
        </ListItem>
        <ListItem>
          <Indicator>
            <h3>2</h3>
          </Indicator>
          <p>
            We prepare fresh “lauk” everyday right before delivery and update
            our menu weekly so you enjoy them at their best
          </p>
        </ListItem>
        <ListItem>
          <Indicator>
            <h3>3</h3>
          </Indicator>
          <p>
            We offer <span>FREE DELIVERIES</span> to residents of USJ, Subang
            Jaya and Putra Heights Mondays to Fridays
          </p>
        </ListItem>
      </HowList>
      <Button
        onClick={() => {
          mixpanel.track('CTA Button Clicked', { section: 'How' });
          scrollToViewButton('pricing');
        }}
      >
        CLAIM YOUR FREE MEALS
      </Button>
    </HowContainer>
  );
};

export default How;
