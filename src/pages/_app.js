import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as fbq from '../lib/fpixel';
import '../styles/global.css';
import Pixel from '../pixel';
require('helvatica-neue-lt/index.css');

function App({ Component, pageProps }) {
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
      <Component {...pageProps} />;
    </>
  );
}

export default App;
