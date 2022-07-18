import React from 'react';
import { NavbarContainer } from './NavBar.styles';
import logo from '../../../assets/mejamakan logo.png';
import { scrollToViewButton } from '../../../utils/ScrollToView/scrollToViewButton';

const NavBar = ({ mixpanel }) => {
  return (
    <NavbarContainer>
      <img src={logo} alt='Ejenkita Logo' />
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