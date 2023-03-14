import LandingContainerView from '@/components/views/Landing';
import Head from 'next/head';

export default function Landing() {
  return (
    <>
      <Head>
        <title>Smart Match</title>
        <meta name="description" content="Smart Matchp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LandingContainerView />
    </>
  );
}
