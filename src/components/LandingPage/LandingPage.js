import React, { useRef, useEffect } from 'react';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import How from './How/How';
import Menu from './Menu/Menu';
import NavBar from './Navbar/Navbar';
import Plans from './Plans/Plans';
import { Container } from './LandingPage.styles';
import FAB from './FAB/FAB';
import Chef from './Chef/Chef';
import { Mixpanel } from '../../mixpanel';

const LandingPage = () => {
  const pricingRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    Mixpanel.track('Landing Page View');
  }, []);

  return (
    <>
      <Container>
        <NavBar />
        <Hero />
        <Plans ref={pricingRef} />
        <Chef />
        <How />
        <Menu ref={menuRef} />
        <Footer />
        <FAB />
      </Container>
    </>
  );
};

export default LandingPage;
