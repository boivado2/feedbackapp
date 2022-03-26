import React from 'react'

function Reply({reply}) {
  return (
    <div className='w-full flex flex-col mt-3'>
    <img className=' w-10 h-10 object-contain rounded-full' src={reply.user.image_url} alt="image_url" />
        <div className='flex justify-between'>
          <div >
            <h4 className=' text-f-dark-blue'>{ reply.user.username}</h4>
            <p className=' text-f-dark-blue-300 text-xs dark:text-f-dark-blue-300'>{"@"+ reply.user.email}</p>
        </div>
        </div>

      <p className='mt-3'>{reply.content}</p>
    
    </div>
    )
}

export default Reply