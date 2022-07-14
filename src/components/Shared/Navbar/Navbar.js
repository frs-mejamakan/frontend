import React from 'react';
import { NavbarContainer } from './NavBar.styles';
import logo from '../../../../public/assets/mejamakan logo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

const NavBar = ({ children }) => {
  const router = useRouter();

  return (
    <NavbarContainer onClick={() => router.push('/')}>
      <Image src={logo} height='30px' width='120px' alt='Ejenkita Logo' />
      <div>{children}</div>
    </NavbarContainer>
  );
};

export default NavBar;
