import * as Sentry from '@sentry/nextjs'
import type { AppProps } from 'next/app'

import { SENTRY_DSN, SENTRY_INIT } from '@/envs'
import GlobalStyles from '@/styles/GlobalStyles'

import '@/styles/app.css'
import '@/styles/reset.css'
import 'remixicon/fonts/remixicon.css'

if (SENTRY_INIT === 'enabled') {
  Sentry.init({
    dsn: SENTRY_DSN,

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  })
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
