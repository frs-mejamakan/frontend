import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as fbq from '../lib/fpixel';
import { SessionProvider } from 'next-auth/react';

import '../styles/global.css';
import Pixel from '../lib/pixel';
import { Body, Container } from '../components/Shared/Layout/Layout';
import Footer from '../components/Shared/Footer/Footer';
import NavBar from '../components/Shared/Navbar/Navbar';
require('helvatica-neue-lt/index.css');

function App({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Pixel />
      <SessionProvider session={session}>
        <Container>
          <NavBar />
          <Body>
            <Component {...pageProps} />
          </Body>
        </Container>
      </SessionProvider>
    </>
  );
}

export default App;
