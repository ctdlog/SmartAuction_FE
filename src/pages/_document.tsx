import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='title' content='Smart Auction' />
        <meta name='description' content='Smart Auction' />
      </Head>
      <body>
        <div id='modal-root' />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
