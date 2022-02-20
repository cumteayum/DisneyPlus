import type { AppProps } from 'next/app'
import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <>
      <div className="min-h-screen bg-fixed bg-no-repeat inset-0 min-w-screen bg-home z-[-1]">
        <SessionProvider session={session}>
          <Navbar />
          <Component {...pageProps} />
        </SessionProvider>
      </div>
    </>
  )
}

export default MyApp
