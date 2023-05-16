import Head from 'next/head'

import LandingContainerView from '@/components/views/Landing'

const Landing = () => {
  return (
    <>
      <Head>
        <title>Smart Auction</title>
        <meta name="description" content="Smart Auction" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LandingContainerView />
    </>
  )
}

export default Landing
