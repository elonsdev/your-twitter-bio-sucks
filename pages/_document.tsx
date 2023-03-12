import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <title>Your Twitter Bio Sucks | @elonsdev tools</title>
          <link rel='icon' href='/favicon.ico' />
          <meta
            name='title'
            content='Your Twitter Bio Sucks | @elonsdev tools'
          ></meta>
          <meta
            name='description'
            content='Create a better twitter bio in 2 steps with the help of AI.'
          ></meta>

          <meta property='og:type' content='website'></meta>
          <meta
            property='og:url'
            content='https://yourbiosucks.elons.dev/'
          ></meta>
          <meta
            property='og:title'
            content='Your Twitter Bio Sucks | @elonsdev tools'
          ></meta>
          <meta
            property='og:description'
            content='Create a better twitter bio in 2 steps with the help of AI.'
          ></meta>
          <meta property='og:image' content='/og.png'></meta>

          <meta property='twitter:card' content='summary_large_image'></meta>
          <meta
            property='twitter:url'
            content='https://yourbiosucks.elons.dev/'
          ></meta>
          <meta
            property='twitter:title'
            content='Your Twitter Bio Sucks | @elonsdev tools'
          ></meta>
          <meta
            property='twitter:description'
            content='Create a better twitter bio in 2 steps with the help of AI.'
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
