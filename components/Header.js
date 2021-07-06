import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'

export default function Header() {
  return (
    <nav className='header flex p-2 justify-center'>
      <div className='w-1/12 mr-1'>
        <Image
          className='align-middle'
          src='https://http2.mlstatic.com/frontend-assets/ui-navigation/5.15.0/mercadolibre/logo__large_plus.png'
          width={134}
          height={34}
          layout='fixed'
        />
      </div>
      <div className='flex items-center w-4/12 ml-2 border rounded-sm bg-gray-100 p-2 shadow'>
        <input
          className='flex mr-2 w-full border-r bg-transparent outline-none placeholder-gray-400'
          type='text'
          placeholder='Buscar productos, marcas y mas...'
        />
        <SearchIcon className='h-6 text-gray-400' />
      </div>
      <div>
        <Image
          src='https://http2.mlstatic.com/D_NQ_748144-MLA46598151134_072021-OO.webp'
          width={340}
          height={39}
        />
      </div>
    </nav>
  )
}
