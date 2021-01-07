import React from 'react';
import Head from 'next/head';
//import '../src/styles/global.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/assets/theme';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    React.useEffect(() => {
        // tirando css injetado
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
      }, []);

  return (
    <React.Fragment>
    <Head>
        <title>g4br13lju5t1n0 - mercadou</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...pageProps} />
    </ThemeProvider>
    </React.Fragment>
  )
}