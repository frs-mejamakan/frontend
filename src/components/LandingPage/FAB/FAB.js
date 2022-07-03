import React from 'react';
import styled from 'styled-components';
import WhatsApp from '@mui/icons-material/WhatsApp';

const Float = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 140px;
  right: 33%;
  background-color: #3bcd92;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #ffff;

  .MuiSvgIcon-root {
    font-size: 40px;
  }

  @media screen and (max-width: 560px) {
    right: 5%;
    bottom: 2.5%;
  }
`;

const whatsAppNumber = () => {
  const message = `Hey! I'd like to know more about Mejamakan :)`;
  const parseMessage = message.replace(' ', '%20');
  window.open(`https://wa.me/${601127192189}?text=${parseMessage}`);
};

const FAB = () => {
  return (
    <Float onClick={() => whatsAppNumber()}>
      <WhatsApp />
    </Float>
  );
};

export default FAB;
