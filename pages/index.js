import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>knajp.pl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="knajp.pl" />
        <p className="description">
          <code>domena efektywnych restauracji</code>
        </p>
      </main>
      <Footer />
    </div>
  )
}
