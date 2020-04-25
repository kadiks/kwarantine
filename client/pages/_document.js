import Document, { Html, Head, Main, NextScript } from 'next/document';

import Config from '../src/Config';
import styles from '../src/utils/styles';
const gaUid = Config.GA_TRACKING_ID;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const isProduction = Config.GA_TRACKING_ID !== '';
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isProduction };
  }

  setGoogleTags() {
    return {
      __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaUid}');
          `,
    };
  }

  render() {
    const { isProduction } = this.props;
    return (
      <Html>
        <Head>
          <meta charSet="utf8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Quicksand:wght@700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          {/* <link rel="stylesheet" href="/css/brands.min.css" /> */}
          <link rel="stylesheet" href="/css/animate.min.css" />
          <link rel="stylesheet" href="/css/styles.css" />

          <script src={`${Config.API_URL}/socket.io/socket.io.js`}></script>
          <script src={`${Config.API_URL}/assets/games.js`}></script>
        </Head>
        <body
          style={{
            background: styles.color.background,
          }}
        >
          <Main />
          <NextScript />
          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gaUid}`}
              />
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </>
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
