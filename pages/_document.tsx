import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Matching</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="bg-gray-100 dark:bg-gray-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
