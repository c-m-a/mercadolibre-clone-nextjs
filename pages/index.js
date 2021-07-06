import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Mercado Libre Colombia</title>
        <meta name="description" content="Mercado Libre Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div>
          <Image
            src='https://http2.mlstatic.com/D_NQ_694152-MLA46597952479_072021-OO.webp'
            width={1600}
            height={340}
          />
        </div>
      </main>

    </div>
  )
}
