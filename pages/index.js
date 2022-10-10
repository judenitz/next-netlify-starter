import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Knajp.pl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="knajp.pl" />
        <p className="description">
          <code>domena efektywnych restauracji</code><br/><br/>
     michal [at] knajp.pl<br/><br/>501 499 771
        </p>
      </main>

      <Footer />
    </div>
  )
}
