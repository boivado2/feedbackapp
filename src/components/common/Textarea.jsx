import React from 'react'

function Textarea({value, onChange, name, error,desc, label}) {
  return (
        <div className='flex flex-col '>
      <label className='text-lg'>{label }</label>
      <span className='text-sm my-2'>{desc }</span>
         <textarea value={value} onChange={onChange} name={name} className='py-2 rounded-lg px-8  bg-light-white-100 outline-none' ></textarea>
          {error && <p className=' py-2 text-red-500'>{ error}</p>}
    </div>
  )
}

export default Textarea