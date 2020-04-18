// import App from 'next/app'
import Head from 'next/head';
import Router from 'next/router';

// import 'react-accessible-accordion/dist/fancy-example.css';

import * as gtag from '../src/utils/GoogleAnalytics';

class MyApp extends React.Component {
  render() {
    const { Component, pageProps } = this.props;
    // console.log('pages/_app#render this.props', this.props);
    return (
      <>
        <Head>
          <title>Kwarantine : les neurones pour déjouer le virus</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
