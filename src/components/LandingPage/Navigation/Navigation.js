import { Mixpanel } from '../../../mixpanel';
import { scrollToViewButton } from '../../../utils/ScrollToView/scrollToViewButton';
import { useSession } from 'next-auth/react';
import { MenuItem } from './Navigation.styles';

const Navigation = () => {
  const { data: session, status } = useSession();

  let render;

  if (!session) {
    render = (
      <MenuItem
        onClick={() => {
          Mixpanel.track('See Menu');
          scrollToViewButton('menu', null, 2500);
        }}
      >
        See Menu
      </MenuItem>
    );
  }

  if (session && session.user.subscribed) {
    render = (
      <MenuItem
        onClick={() => {
          Mixpanel.track('Go to dashboard');
        }}
      >
        Dashboard
      </MenuItem>
    );
  }

  if (session && !session.user.subscribed) {
    render = (
      <MenuItem
        onClick={() => {
          Mixpanel.track('Go to plans');
          scrollToViewButton('pricing', null, 2500);
        }}
      >
        Subscribe
      </MenuItem>
    );
  }

  return <>{render}</>;
};

export default Navigation;
