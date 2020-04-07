import Header from '~/components/Header'
import Footer from '~/components/Footer'

const Layout = (props) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">{props.children}</main>
    <Footer />
  </div>
)

export default Layout
