import React from 'react'

function Select({value, onChange, items,name, error, desc, label}) {
  return (
    <div className='flex flex-col'>
      <label className='text-lg'>{label}</label>
      <span className='text-sm my-2'>{desc }</span>
      <select value={value} onChange={onChange} name={name} className='py-2 rounded-lg px-8 bg-light-white-100 outline-none' >
      <option >select</option>
        {items.map(item => (
            <option key={item._id || item} value={item._id || item}>{item.title || item}</option>
    ))}
      </select>
      {error && <p className=' py-2 text-red-500'>{ error}</p>}
      </div>
  )
}

export default Select