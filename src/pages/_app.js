import '~/css/style.css'
import Layout from '~/layouts/default'
import Head from 'next/head'

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/wsc2hzy.css" />
      </Head>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default MyApp
