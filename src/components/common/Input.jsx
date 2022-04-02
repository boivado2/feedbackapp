import React from 'react'

function Input({name, type, value, onChange, label, desc, error}) {
  return (
    <div className='flex flex-col'>
      <label className='text-lg' htmlFor={name}>{ label}</label>
      <span className='text-sm my-2'>{ desc}</span>
      <input onChange={onChange} className='py-2 rounded-lg px-8  bg-light-white-100 outline-none' value={value} type={type} name={name} placeholder={label} id={name} />
      {error && <p className=' py-2 text-red-500'>{ error}</p>}
    </div>
  )
}

export default Input