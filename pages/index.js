import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Breadcrumb from '../components/Breadcrumb'
import Header from '../components/Header'
import List from '../components/List'

import axios from '../axios';

export default function Home() {
  const [title, setTitle] = useState('')
  const [query, setQuery] = useState('')
  const [results, setResult] = useState([])

  const handleSearch = async e => {
    e.preventDefault()
    const request = await axios.get(`/api/items?search=${query}`)
    setResult(request.data)
  }

  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Mercado Libre Colombia</title>
        <meta name="description" content="Mercado Libre Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />

      <main className='pb-4'>
        { results.length == 0 ?
          <div>
            <Image
              src='https://http2.mlstatic.com/D_NQ_694152-MLA46597952479_072021-OO.webp'
              width={1600}
              height={340}
            />
          </div> :
          <div className='container mx-auto px-5'>
            <Breadcrumb
              categories={results.categories}
            />
            <List
              items={results.items}
            />
          </div>
        }
      </main>

    </div>
  )
}
