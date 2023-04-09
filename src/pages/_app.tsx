import { useState } from 'react'

import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from '@/styles/GlobalStyles'

import '@/styles/app.css'
import '@/styles/reset.css'
import 'remixicon/fonts/remixicon.css'
import 'react-toastify/dist/ReactToastify.css'

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Smart Auction</title>
      </Head>
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyles />
        <ToastContainer theme='dark' />
        <Component {...pageProps} />
        <Analytics />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
