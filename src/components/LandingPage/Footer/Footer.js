import React from 'react';
import { FooterContainer, SocialSection } from './Footer.styled';
import logo from '../../../assets/mejamakan_logo_vertical.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <FooterContainer>
      <img src={logo} alt='mejamakan' />
      <SocialSection>
        <span onClick={() => window.open('https://instagram.com/mejamakan.my')}>
          <InstagramIcon />
          <p>mejamakan.my</p>
        </span>
        <span onClick={() => window.open('https://wa.me/601127192189')}>
          <WhatsAppIcon />
          <p>6011 2719 2189</p>
        </span>
      </SocialSection>
    </FooterContainer>
  );
};

export default Footer;
