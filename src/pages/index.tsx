import Head from 'next/head'

import LandingContainerView from '@/components/views/Landing'

const Landing = () => {
  return (
    <>
      <Head>
        <title>Smart Match</title>
        <meta name="description" content="Smart Match" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LandingContainerView />
    </>
  )
}

export default Landing
