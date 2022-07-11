import React from 'react';
import { NavbarContainer } from './NavBar.styles';
import logo from '../../../../public/assets/mejamakan logo.png';
import { scrollToViewButton } from '../../../Utils/ScrollToView/scrollToViewButton';
import Image from 'next/image';

const NavBar = ({ mixpanel }) => {
  return (
    <NavbarContainer>
      <Image src={logo} height='30px' width='120px' alt='Ejenkita Logo' />
      <h3
        onClick={() => {
          mixpanel.track('See Menu');
          scrollToViewButton('menu', null, 2500);
        }}
      >
        Menu
      </h3>
    </NavbarContainer>
  );
};

export default NavBar;
