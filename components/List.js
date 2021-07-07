import Image from 'next/image'
import Link from 'next/link'

const formatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
})

export default function List({ items }) {
  return (
    <div className='grid grid-row-1 divide-y bg-white p-4 rounded shadow-md'>
      { items.map(i => (
        <div key={i.id} className='flex py-8'>
          <Link
            href={`/item/${i.id}`}
          >
            <Image
              src={i.picture}
              width={180}
              height={180}
            />
          </Link>
          <Link
            href={`/item/${i.id}`}
          >
            <div className='flex flex-col ml-5'>
              <h2 className='text-3xl pt-4'>{formatter.format(i.price.amount)}</h2>
              <h3>{i.title}</h3>
              <p className='text-green-500'>{ i.free_shipping && 'Envio gratis' }</p>
            </div>
          </Link>
        </div>
      )) }
    </div>
  )
}

