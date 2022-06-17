import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RefsProvider } from '../context/refs';
import { SpyCheckProvider } from '../context/spyCheck';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RefsProvider>
      <SpyCheckProvider>
        <Component {...pageProps} />
      </SpyCheckProvider>
    </RefsProvider>
  );
}

export default MyApp;
