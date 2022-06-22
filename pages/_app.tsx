import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RefsProvider } from '../context/refs';
import { SpyCheckProvider } from '../context/spyCheck';
import _ToastContainer from '../components/UI/ToastAlert/_ToastContainer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RefsProvider>
      <SpyCheckProvider>
        <Component {...pageProps} />
        <_ToastContainer />
      </SpyCheckProvider>
    </RefsProvider>
  );
}

export default MyApp;
