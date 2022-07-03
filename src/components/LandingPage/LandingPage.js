import React, { useRef, useEffect } from 'react';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import How from './How/How';
import Menu from './Menu/Menu';
import NavBar from './Navbar/Navbar';
import Plans from './Plans/Plans';
import { Container } from './LandingPage.styled';
import { useMixpanel } from 'react-mixpanel-browser';

const LandingPage = () => {
  const pricingRef = useRef(null);
  const menuRef = useRef(null);
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track('Landing Page View');
  }, []);

  return (
    <Container>
      <NavBar mixpanel={mixpanel} />
      <Hero mixpanel={mixpanel} />
      <Plans ref={pricingRef} mixpanel={mixpanel} />
      <How mixpanel={mixpanel} />
      <Menu ref={menuRef} />
      <Footer />
    </Container>
  );
};

export default LandingPage;
