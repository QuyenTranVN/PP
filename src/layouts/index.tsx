import { Outlet } from 'react-router-dom'
import Header from 'components/header'
import Footer from 'components/footer'

function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
