import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'

import GlobalStyles from '@/styles/GlobalStyles'

import '@/styles/reset.css'
import '@/styles/app.css'
import 'remixicon/fonts/remixicon.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default App
