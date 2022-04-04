import React from 'react'

function Textarea({value, onChange, name, error,desc, label, holder, styles}) {
  return (
        <div className={ `flex flex-col ${styles}`}>
        <label className='text-lg'>{label }</label>
        <span className='text-sm my-2'>{desc }</span>
         <textarea value={value} onChange={onChange} name={name} className={`py-2 rounded-lg px-4  bg-light-white-100 outline-none w-full`}placeholder={holder} ></textarea>
          {error && <p className=' py-2 text-red-500'>{ error}</p>}
    </div>
  )
}

export default Textarea