import '~/css/style.css'
import Layout from '~/layouts/default'
import Head from 'next/head'

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/wsc2hzy.css" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css"
          integrity="sha384-IIED/eyOkM6ihtOiQsX2zizxFBphgnv1zbe1bKA+njdFzkr6cDNy16jfIKWu4FNH"
          crossorigin="anonymous"
        />
      </Head>{' '}
      <Component {...pageProps} key={router.route} />{' '}
    </Layout>
  )
}

export default MyApp
