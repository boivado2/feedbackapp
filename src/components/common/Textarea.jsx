import React from 'react'

function Textarea({value, onChange, name, error,desc, label, holder, styles, handleTextCount}) {
  return (
        <div className={ `flex flex-col ${styles}`}>
        <label className='text-lg'>{label }</label>
        <span className='text-sm my-2'>{desc }</span>
         <textarea value={value} onChange={onChange} onKeyUp={handleTextCount} name={name} maxLength="225" className={`py-2 rounded-lg px-4 resize-none h-28 bg-custom-color-white-100 outline-none w-full focus:outline-custom-color-purple ${error && ' outline-custom-color-red-100'}`}placeholder={holder} ></textarea>
          {error && <p className=' py-2 text-custom-color-red-100'>{ error}</p>}
    </div>
  )
}

export default Textarea