import { useState } from 'react'

import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '@/styles/GlobalStyles'

import '@/styles/reset.css'
import '@/styles/app.css'
import 'remixicon/fonts/remixicon.css'

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Smart Auction</title>
      </Head>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyles />
        <Component {...pageProps} />
        <Analytics />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
