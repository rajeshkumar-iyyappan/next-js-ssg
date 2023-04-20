import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          hef="/fonts/Montserrat-Bold.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          hef="/fonts/Montserrat-ExtraBold.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          hef="/fonts/Montserrat-Regular.ttf"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
