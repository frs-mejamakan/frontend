import React from 'react';
import { FooterContainer, SocialSection } from './Footer.styles';
import logo from '../../../../public/assets/mejamakan_logo_vertical.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';
import { Mixpanel } from '../../../mixpanel';

const Footer = ({}) => {
  return (
    <FooterContainer>
      <Image src={logo} alt='mejamakan' />
      <SocialSection>
        <span
          onClick={() => {
            mixpanel.track('Contact', { channel: 'instagram' });
            window.open('https://instagram.com/mejamakan.my');
          }}
        >
          <InstagramIcon />
          <p>mejamakan.my</p>
        </span>
        <span
          onClick={() => {
            Mixpanel.track('Contact', { channel: 'whatsapp' });
            window.open('https://wa.me/601127192189');
          }}
        >
          <WhatsAppIcon />
          <p>6011 2719 2189</p>
        </span>
      </SocialSection>
    </FooterContainer>
  );
};

export default Footer;
