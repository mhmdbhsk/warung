import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import createEmotionServer from '@emotion/server/create-instance';
import { theme } from '@theme';
import { cache } from './_app';

const { extractCritical } = createEmotionServer(cache);

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="description"
            content="Buat e-commerce anda sendiri dengan cepat dan mudah. Hubungi kami di kodingworks.io"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta
            name="msapplication-TileColor"
            content={theme.palette.primary.main}
          />

          {/* <link rel="manifest" href="/manifest.json" /> */}

          <meta content="/mstile-70x70.png" name="msapplication-square70x70" />
          <meta
            content="/mstile-144x144.png"
            name="msapplication-square144x144"
          />
          <meta
            content="/mstile-150x150.png"
            name="msapplication-square150x150"
          />
          <meta
            content="/mstile-310x150.png"
            name="msapplication-wide310x150"
          />
          <meta
            content="/mstile-310x310.png"
            name="msapplication-square310x310"
          />
          <link
            href="/apple-touch-icon-57x57.png"
            rel="apple-touch-icon"
            sizes="57x57"
          />
          <link
            href="/apple-touch-icon-60x60.png"
            rel="apple-touch-icon"
            sizes="60x60"
          />
          <link
            href="/apple-touch-icon-72x72.png"
            rel="apple-touch-icon"
            sizes="72x72"
          />
          <link
            href="/apple-touch-icon-76x76.png"
            rel="apple-touch-icon"
            sizes="76x76"
          />
          <link
            href="/apple-touch-icon-114x114.png"
            rel="apple-touch-icon"
            sizes="114x114"
          />
          <link
            href="/apple-touch-icon-120x120.png"
            rel="apple-touch-icon"
            sizes="120x120"
          />
          <link
            href="/apple-touch-icon-144x144.png"
            rel="apple-touch-icon"
            sizes="144x144"
          />
          <link
            href="/apple-touch-icon-152x152.png"
            rel="apple-touch-icon"
            sizes="152x152"
          />
          <link
            href="/apple-touch-icon-167x167.png"
            rel="apple-touch-icon"
            sizes="167x167"
          />
          <link
            href="/apple-touch-icon-180x180.png"
            rel="icon"
            sizes="180x180"
            type="image/png"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link rel="stylesheet" href="/fonts/fonts.css" />
        </Head>
        <body style={{ letterSpacing: 0.6 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const styles = extractCritical(initialProps.html);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
      <style
        key="emotion-style-tag"
        data-emotion={`css ${styles.ids.join(' ')}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: styles.css }}
      />,
    ],
  };
};
