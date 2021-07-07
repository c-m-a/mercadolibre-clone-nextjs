export default function Breadcrumb({ categories }) {
  return (
    <div className='flex p-2'>
      { categories.map((c, idx) => (
        <div key={c.id} className='font-semibold'>
          { idx !== 0 && <span className='px-2'>/</span> }
          {c.name}
        </div>
      )) }
    </div>
  )
}
