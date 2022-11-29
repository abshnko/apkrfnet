import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { RefsProvider } from '../context/refs'
import { SpyCheckProvider } from '../context/spyCheck'
import MyToastContainer from '../components/UI/ToastAlert/MyToastContainer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RefsProvider>
      <SpyCheckProvider>
        <Component {...pageProps} />
        <MyToastContainer />
        <Analytics />
      </SpyCheckProvider>
    </RefsProvider>
  )
}

export default MyApp
