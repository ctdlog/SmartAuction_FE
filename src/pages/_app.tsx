import { useEffect, useState } from 'react'

import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'

import { AuthContext } from '@/contexts/auth'
import { getAccessTokenFromLocalStorage } from '@/features/auth/token'
import { getUserInfo } from '@/services/api/user'
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

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      const {
        payload: { role },
      } = await getUserInfo()
      if (role >= 2) {
        setIsLoggedIn(true)
      }
    }
    if (getAccessTokenFromLocalStorage()) {
      getUser()
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Smart Auction</title>
      </Head>
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyles />
        <ToastContainer theme='dark' />
        <AuthContext.Provider
          value={{
            isLoggedIn,
            setIsLoggedIn,
          }}
        >
          <Component {...pageProps} />
        </AuthContext.Provider>
        <Analytics />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
