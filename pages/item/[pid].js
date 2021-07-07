import { useEffect, useState } from 'react'

import axios from '../../axios'
import Header from '../../components/Header'
import useQuery from '../../components/useQuery'

export default function Item() {
  const query = useQuery()
  const [item, setItem] = useState({})

  useEffect(() => {
    console.log(query)
    if (!query)
      return;


    axios.get(`/api/items/${query.pid}`)
      .then(resp => {
        setItem(resp.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Header />
      <div className='grid grid-row-1 divide-y bg-white p-4 rounded shadow-md'>
        {item.description}
      </div>
    </div>
  )
}

