import * as Sentry from '@sentry/nextjs'
import type { AppProps } from 'next/app'

import { SENTRY_INIT } from '@/envs'
import GlobalStyles from '@/styles/GlobalStyles'

import '@/styles/app.css'
import '@/styles/reset.css'
import 'remixicon/fonts/remixicon.css'

if (SENTRY_INIT) {
  Sentry.init({
    dsn: 'https://3c19309a3dc7445991cd088471e20d5b@o4504858053509120.ingest.sentry.io/4504858080837632',

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
