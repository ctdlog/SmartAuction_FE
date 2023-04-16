import Head from 'next/head'
import MyContainerView from '@/components/views/My'

const My = () => {
  return (
    <div>
      <Head>
        <title>My Page</title>
        <meta name='description' content='My Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <MyContainerView />
    </div>
  )
}

export default My
