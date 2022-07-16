import React, { useRef, useEffect, useState } from 'react';
import Hero from './Hero/Hero';
import How from './How/How';
import Menu from './Menu/Menu';
import FAB from './FAB/FAB';
import Chef from './Chef/Chef';
import { Mixpanel } from '../../mixpanel';
import { useSession } from 'next-auth/react';
import Footer from '../Shared/Footer/Footer';

const LandingPage = () => {
  const { data: session } = useSession();

  const menuRef = useRef(null);
  const [paySession, setPaySession] = useState(false);

  const startPaySession = () => {
    setPaySession(true);
  };

  useEffect(() => {
    Mixpanel.track('Landing Page View');
  }, []);

  return (
    <>
      <Hero
        session={session}
        startPaySession={startPaySession}
        paySession={paySession}
      />
      <Menu ref={menuRef} />
      <Chef />
      <How />
      <Footer />
      <FAB />
    </>
  );
};

export default LandingPage;
