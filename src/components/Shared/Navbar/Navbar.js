import React from 'react';
import { NavbarContainer } from './NavBar.styles';
import logo from '../../../../public/assets/mejamakan logo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavBar = ({ children }) => {
  return (
    <NavbarContainer>
      <Link href='/'>
        <Image
          src={logo}
          height='30px'
          width='120px'
          alt='Ejenkita Logo'
          style={{ cursor: 'pointer' }}
        />
      </Link>

      <div>{children}</div>
    </NavbarContainer>
  );
};

export default NavBar;
