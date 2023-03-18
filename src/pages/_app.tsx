import * as Sentry from '@sentry/nextjs'
import type { AppProps } from 'next/app'

import GlobalStyles from '@/styles/GlobalStyles'

import '@/styles/reset.css'
import '@/styles/app.css'
import 'remixicon/fonts/remixicon.css'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
  enabled: process.env.NODE_ENV === 'production',
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
