import Head from 'next/head';
import { Fragment } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>
          Abasimfon Charles | FullStack Website & App Developer, Designer.
        </title>
        {/* <!-- Fonts --> */}
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Outfit%3A300%2C300i%2C400%2C400i%2C500%2C500i%2C600%2C600i%2C700%2C700i%2C800%2C800i%2C900%2C900i%7CSorts+Mill+Goudy&#038;display=swap'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=auto'
          type='text/css'
          media='all'
        />

        {/* <!-- CSS STYLES --> */}
        <link
          rel='stylesheet'
          href='assets/css/vendors/bootstrap.css'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          href='assets/fonts/font-awesome/css/font-awesome.css'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          href='assets/css/vendors/magnific-popup.css'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          href='assets/css/vendors/splitting.css'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          href='assets/css/vendors/swiper.css'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          href='assets/css/vendors/animate.css'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          href='assets/css/main.css'
          type='text/css'
          media='all'
        />

        {/* <!-- Favicon and other icons--> */}
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#2b5797' />
        <meta name='theme-color' content='#ffffff'></meta>
      </Head>
      <Component {...pageProps} />{' '}
    </Fragment>
  );
}

export default MyApp;
